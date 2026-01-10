const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace this URI with your actual connection string
const uri = "mongodb+srv://tusharGupta:gupta9351635646@cse-2cluster0.t0rpj.mongodb.net/?retryWrites=true&w=majority&appName=CSE-2cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Example: List databases
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

// Run the connection function
connectDB();
