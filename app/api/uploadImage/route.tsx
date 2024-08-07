import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData();
  const file = formData.get('myfile') as Blob;
  const customName = formData.get('customName') as string;

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const filename = customName ? `${customName}${file.type.split('/')[1]}` : `image-${Date.now()}.${file.type.split('/')[1]}`;
  
  try {
    // Store the file in Vercel Blob
    const blob = await put(filename, file, {
      access: 'public', // Set the access to public if you want the image to be publicly accessible
    });

    return NextResponse.json({ url: blob.url, filename }, { status: 201 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: 'Failed to upload image.' }, { status: 500 });
  }
}
