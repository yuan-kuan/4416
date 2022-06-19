<script>
  export let bags;
</script>

<h2>Choose Your Bag</h2>
<ul>
	{#each bags as bag}
	  <li><a href="bags/{bag.id}">{bag.name}</a></li>
	{/each}
</ul>
