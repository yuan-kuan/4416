<script>
  import * as R from 'ramda';
  import { browser } from '$app/env';
  import {Slidy, classNames} from '@slidy/svelte';
  import {stairs, translate} from '@slidy/animation';
  import {scaled} from '$lib/images';
  //import s1 from '$static/s1.jpg?w=500';
  //import s2 from '$static/s2.jpg?w=500';
  //import s3 from '$static/s3.jpg?w=500';
  //import s4 from '$static/s4.jpg?w=500';

  export let bags;

  console.log(bags);

  const idToImage = (id) => {
		if (id == "prod_LyD7bY7mmz5nyK") {
			return scaled[3];
		}
		if (id == "prod_Lx7QwDJ1b5l6AO") {
			return scaled[1];
		}
		if (id == "prod_Lx7P6tbQ8U3hEk") {
			return scaled[3];
		}
		if (id == "prod_Lx7P6tb8U3hEk") {
			return scaled[0];
		} else {
			return scaled[2];
		}
	}

  const slides = R.map(
		(bag) => {
      return { id: bag.id, 
        srcset: idToImage(bag.id),
        sizes: '(max-width:300px) 300px, (max-width:500px) 500px, 800px'
      };
		}
  , bags);

  console.log(slides);

  const rootLens = R.lensProp('root');
  const myClassNames = R.set(rootLens, 'slidy mygrid', classNames);

  const onSlidyIndex = (event) => {
    console.log('slided to', event.detail.index);
  }

</script>

<div class="info">
  <h2>Choose Your Bag</h2>
  <ul>
  	{#each bags as bag}
  	  <li><a href="bags/{bag.id}">{bag.name}</a></li>
  	{/each}
  </ul>
</div>

<!-- Svelte kit recommended way to deal with SSR issue -->
{#if (browser)}
<div class="slide">
<Slidy
  classNames={myClassNames}
  {slides}
  on:index={onSlidyIndex}
  axis="y"
  arrows={false}
  animation={stairs}
  counter={false}
  loop="true"
  navigation={true}
  --slidy-slide-gap="1rem"
  --slidy-slide-height="95%"
  --slidy-nav-item-color="purple"
  --slidy-nav-item-size="16px"
  >
		<!-- button slot="overlay"> no share </button -->
</Slidy>
</div>
{/if}

<div class="bot"></div>

<style>
  .slide {
    overflow-y:hidden;
    aspect-ratio:3/4;
  }

  /* Overide the .slidy.vertical grid setup to have the dots close to main slide */
  :global(.slidy.mygrid.vertical) {
    display: grid;
    grid-template: auto minmax(0, 1fr) auto/minmax(0, 1fr) auto;
    grid-template-areas:
        "prev-slide dots"
        "slides dots"
        "next-slide dots";
   }

  .bot {
    flex-grow:1;
    background-color:red;
  }
</style>
