import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
export interface LinkArchive {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	Title: string;
	private: boolean;
	URL: string;
	Key: string;
}

export interface LinkArchiveResponse {
	page: number;
	perPage: number;
	totalPages: number;
	totalItems: number;
	items: LinkArchive[];
}
export const pb = new PocketBase(env.POCKETBASE_URL);

async function ensureAuthenticated() {
	if (!pb.authStore.isValid) {
		try {
			await pb
				.collection('API_ACCESS')
				.authWithPassword(env.POCKETBASE_USERNAME, env.POCKETBASE_PASSWORD);
		} catch (error) {
			console.error('Authentication failed:', error);
			throw new Error('Failed to authenticate with PocketBase');
		}
	}
}

export async function getArchiveLinks(url?: string): Promise<LinkArchiveResponse> {
	try {
		await ensureAuthenticated();
		// switching = with ~ gives search capabilities instead of exact match.
		const filter = url ? `URL = "${url}"` : '';
		const records = await pb.collection('Link_Archives').getList(1, 10, {
			sort: '-created',
			filter: filter
		});
		return records as LinkArchiveResponse;
	} catch (error) {
		console.error('Error fetching link archives:', error);
		throw error;
	}
}
