import PocketBase from 'pocketbase';
import { POCKETBASE_PASSWORD, POCKETBASE_URL, POCKETBASE_USERNAME } from '$env/static/private';
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

function createPocketBaseClient() {
	return new PocketBase(POCKETBASE_URL);
}

async function ensureAuthenticated(pb: PocketBase) {
	if (!pb.authStore.isValid) {
		try {
			await pb.collection('API_ACCESS').authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD);
		} catch (error) {
			console.error('Authentication failed:', error);
			throw new Error('Failed to authenticate with PocketBase');
		}
	}
}

export async function getArchiveLinks(url?: string): Promise<LinkArchiveResponse> {
	try {
		const pb = createPocketBaseClient();
		await ensureAuthenticated(pb);
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
