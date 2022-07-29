<script>
  import {Slidy} from '@slidy/svelte';
  import s1 from '$static/s1.jpg?w=500';
  import s2 from '$static/s2.jpg?w=500';
  import s3 from '$static/s3.jpg?w=500';
  import s4 from '$static/s4.jpg?w=500';

  export let bags;

  const slides = [
    { id: 1, width:500, height: 500, src: s1 },
    { id: 2, width:500, height: 500, src: s2 },
    { id: 3, width:500, height: 500, src: s3 },
    { id: 4, width:500, height: 500, src: s4 },
  ];

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

