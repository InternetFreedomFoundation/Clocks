<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { ActionData, PageData } from './$types';
	import UrlForm from './url-form.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	export let data: PageData;
	export let form: ActionData;
	const { message } = superForm(data.form);
</script>

<div class="container mx-auto px-4 py-6">
	<div class="px-4 py-8 border-b max-w-md mx-auto">
		<h1 class="scroll-m-20 text-center text-6xl font-extrabold tracking-tight">Clocks ⏰</h1>
		<p class="text-center leading-7 [&:not(:first-child)]:mt-6">
			An Experimental archival solution
		</p>
	</div>
	<UrlForm data={data.form} />

	{#if $message}
		<div class="mx-auto max-w-lg p-6">
			<Card.Root>
				<Card.Content>
					<p class="text-center text-xl font-bold text-primary">{$message}</p>
				</Card.Content>
			</Card.Root>
		</div>
	{/if}

	{#if form?.archives && form.archives.totalItems > 0}
		<div class="mt-8">
			<h2 class="mb-6 px-2 text-center text-2xl font-medium underline underline-offset-2">
				Showing {form.archives.totalItems} Results:
			</h2>
			<ul class="mx-auto max-w-lg space-y-6">
				{#each form.archives.items as arch}
					<Card.Root>
						<Card.Header>
							<Card.Title role="button" class="underline-offset-4 hover:underline"
								><a href="/view/{arch.Key}" target="_blank">{arch.Title}</a>
							</Card.Title>
						</Card.Header>
						<Card.Content>
							<a class="text-sm text-muted-foreground" href={arch.URL} target="_blank"
								>Original URL: {arch.URL}</a
							>
						</Card.Content>
						<Card.Footer>
							<p class="relative rounded bg-muted px-3 py-2 font-mono text-sm font-light">
								Captured at: {new Date(arch.created).toLocaleString()}
							</p>
						</Card.Footer>
					</Card.Root>
				{/each}
			</ul>
		</div>
	{/if}
</div>
