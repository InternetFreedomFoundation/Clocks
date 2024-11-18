import type { RequestHandler } from './$types';
import { getS3SignedUrl } from '$lib/s3';
import { AWS_BUCKET_NAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const url = params.url;

	console.log("Returning presigned URL for:", url);

	const downloadURL = await getS3SignedUrl({
		bucket: AWS_BUCKET_NAME,
		key: url
	});
	throw redirect(303, downloadURL);
};
