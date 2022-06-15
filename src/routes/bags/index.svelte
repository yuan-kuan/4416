<script context="module">
  /** @type {import('./__types/[slug]').Load} */
  export async function load({ params, fetch, session, stuff }) {
		const url = "https://4416.pages.dev/api/kvSync.json"
    const response = await fetch(url);

		console.log('load in bags ', response);
    return {
      status: response.status,
      props: {
        kvs: response.ok && (await response.json())
      }
    };
  }
</script>

<script>
  export let bags;
  export let kvs;
</script>

<h2>Choose Your Bag</h2>
<ul>
	{#each bags as bag}
	  <li><a href="bags/{bag.id}">{bag.name}</a></li>
	{/each}
</ul>

<p>{kvs}</p>
