<script lang="ts">
	export let data
</script>

<h1>{data.item.name}</h1>
<p>{data.item.description}</p>
<a href="/items/{data.item.id}/details">More Details</a>
