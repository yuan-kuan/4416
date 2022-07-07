<script>
  import {getBag, getArt, reset} from '$lib/cart';
  import Image from '$static/test.jpg?w=100';

  const checkout = () => {
  	const cart = {
      bag: getBag(),
      art: getArt(),
  	};
    window.fetch('/api/checkout', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });
  }
</script>

<h1>Welcome to 4416</h1>

<p>This is a website to let you choose an art, and put in on the bag that you like.</p>

<p>bag: {getBag()}</p>
<p>art: {getArt()}</p>
<button on:click={reset}>Reset Cart</button>
<button on:click={checkout}>Checkout</button>


<br>
<a href='/bags'>Bags</a>
<br>
<a href='/arts'>Arts</a>

<img src="{Image}" />
