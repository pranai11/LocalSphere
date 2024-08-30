const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://pranai3340:Dp_11022004@mydatabase1.ij12wdk.mongodb.net/?retryWrites=true&w=majority&appName=Mydatabase1"
;

const app = express();  // Initialize the app variable
app.use(cors());

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Middleware to parse JSON data
app.use(bodyParser.json());

// Middleware to parse urlencoded data (from forms)
app.use(bodyParser.urlencoded({ extended: true }));


// Middleware to connect MongoDB
const connectToDatabase = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

connectToDatabase();

// Define routes
app.get("/Login", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('users').findOne(req.query);
    if (result) {
      res.send({ status: "success", data: result });
    } else {
      res.send({ status: "error" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/Signup", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('users').insertOne(req.query);
    res.send({ status: "success", data: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/business-trends", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('Trending_Businesses').find({}).toArray();
    res.send({ status: "success", business_trends: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('Categories').find({}).toArray();
    res.send({ status: "success", categories: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/Reviews", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('Reviews').find({}).toArray();
    res.send({ status: "success", Reviews: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/Blogs", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    if (Object.keys(req.query).length > 0) {
      await database.collection('Blogs').insertOne(req.query);
    }
    const result = await database.collection('Blogs').find({}).toArray();
    res.send({ status: "success", Blogs: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/search-items-category", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const keyword = req.query.keyword;
    console.log(req.query.keyword);
    const result = await database.collection('search_items')
      .find({ category: { $regex: keyword, $options: 'i' }})
      .toArray();
      console.log(result);
    if (result.length > 0) {
      console.log(result)
      res.send({ status: "success", items: result });
    } else {
      res.send({ status: "error", message: "No items found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});


app.get("/search-items-loc", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const keyword = req.query.keyword;
    console.log(req.query.keyword);
    const result = await database.collection('search_items')
      .find({ location: { $regex: keyword, $options: 'i' }})
      .toArray();
      console.log(result);
    if (result.length > 0) {
      console.log(result)
      res.send({ status: "success", items: result });
    } else {
      res.send({ status: "error", message: "No items found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.post("/register-business", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const businessData = req.body;

    if (!businessData) {
      return res.status(400).send({ status: "error", message: "No data provided" });
    }

    const result = await database.collection('Businesses').insertOne(businessData);

    if (result.insertedId) {
      res.send({ status: "success", data: result });
    } else {
      res.status(500).send({ status: "error", message: "Failed to register business" });
    }
  } catch (error) {
    console.error("Error registering business:", error.message);
    res.status(500).send({ status: "error", message: "Internal server error." });
  }
});





// Start the server
app.listen(8008, () => {
  console.log(`Server is running on port ${8008}`);
});
