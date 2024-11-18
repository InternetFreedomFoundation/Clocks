<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.svg';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col justify-between">
	<header class="flex items-start justify-between p-4">
		<a href="/"> <img alt="Internet Freedom Foundation" src={logo} width="200px" /></a>
		<nav>
			<ul class="flex space-x-4 text-lg underline underline-offset-4">
				<li><a href="/faq">FAQ</a></li>
			</ul>
		</nav>
	</header>

	<main class="container mx-auto p-6">
		{@render children()}
	</main>

	<footer class="p-4 text-center">
		&copy; {new Date().getFullYear()} Internet Freedom Foundation
		<br />
		<em class="text-sm text-muted-foreground">
			Made with ❤️ by <a class="underline" href="https://djoker.tech">dJoker</a>
		</em>
	</footer>
</div>
