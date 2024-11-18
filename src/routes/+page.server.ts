import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { getArchiveLinks, type LinkArchiveResponse } from '$lib/pocketbase.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			console.log("Received search for URL:", form.data.URL);
			const archives: LinkArchiveResponse = await getArchiveLinks(form.data.URL);
			if (archives.totalItems == 0) {
				return message(form, 'No archives found', {
					status: 404
				});
			}
			console.log("Found %d archives", archives.totalItems);
			return {
				form,
				archives
			};
		} catch (error) {
			console.error('error', error);
			return message(form, 'Failed to fetch archives', {
				status: 500
			});
		}
	}
};
