<script lang="ts">
	import "@picocss/pico"
	import "../app.css"

	export let data
</script>

<main class="container">
	<nav>
		<ul>
			<li><strong><a href="/">My App</a></strong></li>
		</ul>
		<form action="/logout" method="POST">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/items">Items</a></li>
				<li><a href="/account">Account</a></li>
				{#if data.user}
					<li>
						<button type="submit" role="button">Logout</button>
					</li>
				{:else}
					<li><a href="/login" role="button">Login</a></li>
				{/if}
			</ul>
		</form>
	</nav>

	<slot />
</main>
