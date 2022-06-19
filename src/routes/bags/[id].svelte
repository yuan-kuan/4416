<script>
  import {session} from '$app/stores';
  
  export let bag;

  const select = () => {
		$session['bag'] = bag.id;
  }
</script>

<h2>Bag Is</h2>
<p>{bag.name}</p>

<button on:click="{() => select()}">I want this</button>
