<script>
  export let bags;
</script>

<h2>Choose Your Bag</h2>
<ul>
	{#each bags as bag}
	  <li>{bag.name}</li>
	{/each}
</ul>
