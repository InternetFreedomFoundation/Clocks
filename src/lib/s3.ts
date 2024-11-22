import {
	AWS_ACCESS_KEY_ID,
	AWS_BUCKET_NAME,
	AWS_REGION,
	AWS_SECRET_ACCESS_KEY
} from '$env/static/private';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
	region: AWS_REGION,
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	}
});

interface S3Config {
	bucket: string;
	key: string;
}

/**
 * Generate a signed URL for accessing an S3 object
 * @param config Configuration object containing bucket and key
 * @returns Promise with the signed URL
 */
export async function getS3SignedUrl(config: S3Config): Promise<string> {
	try {
		const command = new GetObjectCommand({
			Bucket: AWS_BUCKET_NAME,
			Key: config.key
		});

		const signedUrl = await getSignedUrl(s3Client, command, {
			expiresIn: 600
		});

		return signedUrl;
	} catch (error) {
		console.error('Error generating signed URL:', error);
		throw new Error('Failed to generate signed URL for S3 object');
	}
}
