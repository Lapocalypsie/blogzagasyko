import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error('MONGO_URI is not defined');
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// GET: Fetch all articles
export async function GET() {
    try {
        await client.connect();
        const database = client.db('Articles');
        const collection = database.collection('Article');

        const articles = await collection.find().toArray();
        return NextResponse.json({ data: articles });
    } catch (error) {
        console.error('Failed to fetch documents:', error);
        return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
    }
}

// POST: Add a new article
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        await client.connect();
        const database = client.db('Articles');
        const collection = database.collection('Article');

        await collection.insertOne(body);
        return NextResponse.json({ message: 'Article saved successfully' });
    } catch (error) {
        console.error('Error saving article:', error);
        return NextResponse.json({ message: 'Problem saving article' }, { status: 500 });
    }
}

// PUT: Update an existing article
export const PUT = async (request: NextRequest) => {
    try {
        const body = await request.json();

        const { _id, ...updateFields } = body; // Change id to _id

        // Validate and convert _id
        if (!_id || !ObjectId.isValid(_id)) {
            return NextResponse.json({ message: 'Invalid article _id' }, { status: 400 });
        }

        const objectId = ObjectId.createFromHexString(_id); // Use _id

        await client.connect();
        const database = client.db('Articles');
        const collection = database.collection('Article');

        const result = await collection.updateOne(
            { _id: objectId }, // Use objectId for query
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ message: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Article updated successfully' });
    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json({ message: 'Problem updating article' }, { status: 500 });
    }
};


// DELETE: Delete an article
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ message: 'Invalid article ID' }, { status: 400 });
        }

        await client.connect();
        const database = client.db('Articles');
        const collection = database.collection('Article');

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Article deleted successfully' });
    } catch (error) {
        console.error('Error deleting article:', error);
        return NextResponse.json({ message: 'Problem deleting article' }, { status: 500 });
    }
}
