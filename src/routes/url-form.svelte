<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input/index.js';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms/client';
	import { formSchema, type FormSchema } from './schema';
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		resetForm: false
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="mx-auto mt-4 flex w-full max-w-3xl flex-col items-center">
	<Form.Field {form} name="URL">
		<Form.Control>
			{#snippet children({ props })}
				<div class="flex w-full gap-2">
					<Input {...props} bind:value={$formData.URL} placeholder="https://intenetfreedom.in" />
					<Form.Button>Search</Form.Button>
				</div>
			{/snippet}
		</Form.Control>
		<Form.Description class="mt-4 text-center text-sm text-gray-500"
			>Enter any URL to search through its archived versions</Form.Description
		>
		<Form.FieldErrors class="mt-2 text-center text-red-500" />
	</Form.Field>
</form>
