<script>
  export let arts;
  export let bags;
</script>

<h2>Dashboard</h2>
<ul>
	{#each arts as art}
	  <li><a href="arts/{art.id}">{art.name}</a></li>
	{/each}
	  <li><a href="admin/create/art">new art</a></li>
</ul>
<ul>
	{#each bags as bag}
	  <li><a href="bags/{bag.id}">{bag.name}</a></li>
	{/each}
	  <li><a href="admin/create/bag">new bag</a></li>
</ul>
