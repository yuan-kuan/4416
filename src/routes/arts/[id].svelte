<script>
  import {session} from '$app/stores';
  
  export let art;
  
  const select = () => {
		$session['art'] = art.id;
  }
</script>

<h2>Beauty</h2>
<p>{art.name}</p>

<button on:click="{() => select()}">I want this</button>
