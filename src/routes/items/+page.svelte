<script lang="ts">
	export let data
</script>

<h1>Items</h1>
<table>
	<thead>
		<tr>
			<th scope="col">ID</th>
			<th scope="col">Name</th>
			<th scope="col">Description</th>
			<th scope="col">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.items as item}
			<tr>
				<th scope="row">{item.id}</th>
				<td>{item.name}</td>
				<td>{item.description}</td>
				<td><a href="/items/{item.id}">View</a></td>
			</tr>
		{/each}
	</tbody>
</table>
