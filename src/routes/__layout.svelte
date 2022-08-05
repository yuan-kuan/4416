<script context="module">
  console.log('call in layout');
</script>

<div>
<h3>4416 Header</h3>

<slot></slot>
</div>
<style>
  h3 {
		background-color:lightgrey;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
