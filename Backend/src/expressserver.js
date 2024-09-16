require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri = process.env.MONGODB_URI;
const { ObjectId } = require('mongodb');
const { OAuth2Client } = require('google-auth-library');
const gclient = new OAuth2Client("178915392982-etho3k3irum2lfrjs563rsebdcao5elp.apps.googleusercontent.com");
const app = express();  // Initialize the app variable


app.use(cors("*"));


// app.use(cors({
//   origin: ["https://localsphere.netlify.app", "http://localhost:3000", "https://localsphere.onrender.com"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

// app.use((req, res, next) => {
//   const allowedOrigins = ['https://localsphere.netlify.app', 'http://localhost:3000', 'https://localsphere.onrender.com'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//   }
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });


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
    console.log("Connected successfully to MongoDB");
    db = client.db("LocalSphere");
    usersCollection = db.collection("Users");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

connectToDatabase();


app.get('/',(req,res)=>{
  res.send("API IS WORKING");
})

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
    console.log('Updating blog:', req.params.id);
    console.log('Request body:', req.body);
    const database = client.db('LocalSphere');
    const { id } = req.params;
    
    // Ensure id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ status: "error", message: "Invalid blog ID" });
    }

    const result = await database.collection('Blogs').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ status: "error", message: "Blog not found" });
    }

    if (result.modifiedCount === 1) {
      res.send({ status: "success", message: "Blog updated successfully" });
    } else {
      res.send({ status: "success", message: "No changes made to the blog" });
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: error.message, stack: error.stack });
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

app.get("/search-items", async (req, res) => {
  try {
    const database = client.db('LocalSphere');
    const { category, location } = req.query;
    let query = {};

    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    const result = await database.collection('search_items')
      .find(query)
      .toArray();

    if (result.length > 0) {
      res.send({ status: "success", items: result });
    } else {
      res.send({ status: "error", message: "No items found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

const PORT = process.env.PORT || 8008;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
