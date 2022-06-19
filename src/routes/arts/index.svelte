<script>
  export let arts;
</script>

<h2>Art, your choice</h2>
<ul>
	{#each arts as art}
	  <li><a href="arts/{art.id}">{art.name}</a></li>
	{/each}
</ul>
