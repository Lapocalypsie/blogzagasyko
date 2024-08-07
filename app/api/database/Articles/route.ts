const { MongoClient, ServerApiVersion } = require("mongodb");
import { NextResponse } from "next/server";

// Define the GET function to fetch articles
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export async function GET() {
    const uri = process.env.MONGO_URI;
    console.log(uri);
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        // Connect to the client
        await client.connect();

        // Access the database and collection
        const database = client.db("Articles"); // Replace with your database name
        const collection = database.collection("Article");

        // Fetch all documents from the collection
        const findResult = await collection.find().toArray();

        // Return the documents in the response
        return new Response(JSON.stringify({ data: findResult }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Failed to fetch documents:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch documents" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    } finally {
        // Ensure client is closed properly
        await client.close();
    }
}

export const POST = async (request: Request) => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error("MONGO_URI is not defined");
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        const body = await request.text();
        const newArticle = JSON.parse(body);

        // Connect to the client
        await client.connect();

        // Access the database and collection
        const database = client.db("Articles"); // Replace with your database name
        const collection = database.collection("Article");

        // Insert the new article
        await collection.insertOne(newArticle);

        return NextResponse.json({ message: "Article saved successfully" });
    } catch (error) {
        console.error("Error saving article:", error);
        return NextResponse.json({ message: "Problem saving article" }, { status: 500 });
    } finally {
        // Ensure client is closed properly
        await client.close();
    }
};