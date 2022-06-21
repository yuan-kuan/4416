<script>
  import {setArt} from '$lib/cart';
  export let art;
  const select = () => {
    setArt(art.id);
  }
</script>

<h2>Beauty</h2>
<p>{art.name}</p>

<button on:click="{() => select()}">I want this</button>
