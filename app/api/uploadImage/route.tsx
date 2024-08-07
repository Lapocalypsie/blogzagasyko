import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';

export const POST = async (req : any) => {
  const formData = await req.formData();
  const file = formData.get('myfile');
  const customName = formData.get('customName'); // Custom name for the image

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = customName ? `${customName}${path.extname(file.name)}` : Date.now() + file.name.replaceAll(' ', '_');
  
  try {
    await writeFile(path.join(process.cwd(), 'public/cardHeader/' + filename), buffer);
    return NextResponse.json({ filename, status: 201 }); // Return filename in response
  } catch (error) {
    console.log('Error occurred', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
};
