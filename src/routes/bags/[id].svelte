<script>
  import {setBag} from '$lib/cart';

  export let bag;

  const select = () => {
		setBag(bag.default_price);
  }
</script>

<h2>Bag Is</h2>
<p>{bag.name}</p>

<button on:click="{() => select()}">I want this</button>
