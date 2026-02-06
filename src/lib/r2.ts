import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
    console.warn('R2 Storage credentials missing');
}

export const r2Client = new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID || '',
        secretAccessKey: R2_SECRET_ACCESS_KEY || '',
    },
});

export const r2Service = {
    async uploadFile(file: Buffer, fileName: string, contentType: string) {
        try {
            const command = new PutObjectCommand({
                Bucket: R2_BUCKET_NAME,
                Key: fileName,
                Body: file,
                ContentType: contentType,
            });
            await r2Client.send(command);
            return `${R2_PUBLIC_URL}/${fileName}`;
        } catch (error) {
            console.error('R2 Upload Error:', error);
            throw error;
        }
    },

    async deleteFile(fileName: string) {
        try {
            const command = new DeleteObjectCommand({
                Bucket: R2_BUCKET_NAME,
                Key: fileName,
            });
            await r2Client.send(command);
        } catch (error) {
            console.error('R2 Delete Error:', error);
            throw error;
        }
    },

    getPublicUrl(fileName: string) {
        return `${R2_PUBLIC_URL}/${fileName}`;
    }
};
