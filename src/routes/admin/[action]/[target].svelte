<script>
  export let action;
  export let item;
  export let formAction;
</script>

<h2>{action}</h2>

<form method="post" action="{formAction}">
  <input id="id" name="id" value="{item.id}">
  <input id="name" name="name"value="{item.name}">
  <input id="type" name="type"value="{item.type}">
  <button type="submit">{action}</button>
</form>
