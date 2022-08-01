<script>
  import * as R from 'ramda';
  import {Slidy} from '@slidy/svelte';
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
      return { id: bag.id, width:500, height: 500, src: idToImage(bag.id) };
		}
  , bags);

  const onSlidyIndex = (event) => {
    console.log('slided to', event.detail.index);
  }

</script>

<h2>Choose Your Bag</h2>
<ul>
	{#each bags as bag}
	  <li><a href="bags/{bag.id}">{bag.name}</a></li>
	{/each}
</ul>

<Slidy
  {slides}
  on:index={onSlidyIndex}
  axis="y"
  --slidy-height="250px">
		<button slot="overlay"> no share </button>
</Slidy>

