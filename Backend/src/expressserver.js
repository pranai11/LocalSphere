const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const app = express();  // Initialize the app variable
const corsOptions = {
  origin: ['https://localsphere.netlify.app', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Add this function to verify Google tokens
async function verifyGoogleToken(token) {
  const ticket = await gclient.verifyIdToken({
    idToken: token,
    audience: "178915392982-etho3k3irum2lfrjs563rsebdcao5elp.apps.googleusercontent.com",
  });
  const payload = ticket.getPayload();
  return payload;
}


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

app.post("/google-signin", async (req, res) => {
  try {
    const { token } = req.body;
    console.log("Received token:", token);

    const ticket = await gclient.verifyIdToken({
      idToken: token,
      audience: "178915392982-etho3k3irum2lfrjs563rsebdcao5elp.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    console.log("Token payload:", payload);

    const database = client.db('LocalSphere');
    let user = await database.collection('users').findOne({ email: payload.email });
    
    if (!user) {
      user = {
        name: payload.name,
        email: payload.email,
        googleId: payload.sub,
      };
      await database.collection('users').insertOne(user);
      console.log("New user created:", user);
    } else {
      console.log("Existing user found:", user);
    }
    
    res.send({ status: "success", data: user });
  } catch (error) {
    console.error("Error in Google Sign-In:", error);
    res.status(500).send({ status: "error", message: "Authentication failed", error: error.message });
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
    res.json({ status: "success", business_trends: result });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
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


// Update the existing /Blogs route
app.get("/Blogs", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('Blogs').find({}).toArray();
    res.send({ status: "success", Blogs: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// Add a new route for creating blogs
app.post("/Blogs", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const result = await database.collection('Blogs').insertOne(req.body);
    res.send({ status: "success", data: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// New route for updating blogs
app.put("/Blogs/:id", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ status: "error", message: "Invalid blog ID" });
    }

    const result = await database.collection('Blogs').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ status: "error", message: "Blog not found" });
    }

    res.json({ status: "success", message: "Blog updated successfully" });
  } catch (error) {
    console.error("Error updating blog:", error);
    console.error("Request body:", req.body);
    console.error("Request params:", req.params);
    res.status(500).json({ status: "error", message: "Internal server error", error: error.message });
  }
});
app.get("/search-items-category", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const keyword = req.query.keyword;
    const result = await database.collection('search_items')
      .find({ category: { $regex: keyword, $options: 'i' }})
      .toArray();
      console.log(result);
    if (result.length > 0) {
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
    const result = await database.collection('search_items')
      .find({ location: { $regex: keyword, $options: 'i' }})
      .toArray();
      console.log(result);
    if (result.length > 0) {
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

app.post("/Contact_us", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const ContactData = req.body;

    if (!ContactData) {
      return res.status(400).send({ status: "error", message: "No data provided" });
    }

    const result = await database.collection('Contact_us').insertOne(ContactData);

    if (result.insertedId) {
      res.send({ status: "success", data: result });
    } else {
      res.status(500).send({ status: "error", message: "Failed to submit query" });
    }
  } catch (error) {
    console.error("Error submitting query:", error.message);
    res.status(500).send({ status: "error", message: "Internal server error." });
  }
});

//Temporary CORS bypass for testing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Start the server
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.path}`);
  next();
});
