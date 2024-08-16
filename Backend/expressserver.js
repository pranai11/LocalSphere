const express = require("express")
const fs = require('fs')
const path = require("path")
const app = express()
const cors = require('cors')


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pranai3340:Dp_11022004@mydatabase1.ij12wdk.mongodb.net/?retryWrites=true&w=majority&appName=Mydatabase1";
app.use(cors())

app.listen(8008,(req,res)=>{


 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


  async function run() {
   
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      const database=client.db('LocalSphere');
      // const collection = database.collection('users');

      // console.log(req)
      // const result = await collection.insertOne(req.query)

  }
  run()
  // run().catch(console.dir);

    app.get("/Login",(req,res)=>{
        // app.use(express.static(path.join(__dirname,"public")))
        // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

       const Login=async()=>{
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });

            const database=client.db('LocalSphere');
            const result = await database.collection('users').findOne(req.query);
            console.log(result)
            if(result!=='null'&&result!==null){
              const output={status:"success",data:result}
              res.send(output)
          }
          else{
            const output={status:"error"}
              res.send(output)
          }
       }

      //  const data=req.query

    
            // if(result){
            //     res.send("<script>window.location.replace('http://localhost:3000/')</script>")
            //     console.log("User data inserted Successfully!")
            // }
            // else{
            //     console.log("User data insertion unsuccessfull")
            // }
      
       
        
        Login()
    })


    app.get("/Signup",(request,res)=>{
      // app.use(express.static(path.join(__dirname,"public")))
      // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

     const Signup=async()=>{
          // Connect the client to the server	(optional starting in v4.7)
          await client.connect();
          // Send a ping to confirm a successful connection
          await client.db("admin").command({ ping: 1 });

          const database=client.db('LocalSphere');
          const result = await database.collection('users').insertOne(request.query);
          console.log(request)
          if(result){
            const output={status:"success",data:result}
            res.send(output)
        }
        else{
          const output={status:"error"}
            res.send(output)
        }
       
     }
      
      Signup()
  })



    app.get("/business-trends",(reque,res)=>{
      // app.use(express.static(path.join(__dirname,"public")))
      // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

     const trends=async()=>{
          // Connect the client to the server	(optional starting in v4.7)
          await client.connect();
          // Send a ping to confirm a successful connection
          await client.db("admin").command({ ping: 1 });

          const database=client.db('LocalSphere');
          const result = await database.collection('Trending_Businesses').find({}).toArray();
          console.log(reque)
          if(result){
            const output={status:"success",business_trends:result}
            res.send(output)
        }
        else{
          const output={status:"error"}
            res.send(output)
        }
       res.end()
     }
      
      trends()
  })




  app.get("/categories",(creq,res)=>{
    // app.use(express.static(path.join(__dirname,"public")))
    // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

   const category=async()=>{
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        const database=client.db('LocalSphere');
        const result = await database.collection('Categories').find({}).toArray();
        console.log(creq)
        if(result){
          const output={status:"success",categories:result}
          res.send(output)
      }
      else{
        const output={status:"error"}
          res.send(output)
      }
     res.end()
   }
    
    category()
})


app.get("/Reviews",(rreq,res)=>{
  // app.use(express.static(path.join(__dirname,"public")))
  // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

 const Review=async()=>{
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      const database=client.db('LocalSphere');
      const result = await database.collection('Reviews').find({}).toArray();
      console.log(rreq)
      if(result){
        const output={status:"success",Reviews:result}
        res.send(output)
    }
    else{ 
      const output={status:"error"}
        res.send(output)
    }
   res.end()
 }
  
  Review()
})


app.get("/Blogs",(breq,res)=>{
  // app.use(express.static(path.join(__dirname,"public")))
  // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

 const Review=async()=>{
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      const database=client.db('LocalSphere');
      if(Object.keys(breq.query).length > 0){
      const bresult = await database.collection('Blogs').insertOne(breq.query);}

      const result = await database.collection('Blogs').find({}).toArray();
      console.log(breq)
      if(result){
        const output={status:"success",Blogs:result}
        res.send(output)
    }
    else{ 
      const output={status:"error"}
        res.send(output)
    }
   res.end()
 }
  
  Review()
})





app.get("/search-items",(sireq,res)=>{
  // app.use(express.static(path.join(__dirname,"public")))
  // res.sendFile(path.join(__dirname,"public","Amazon-bootstrap.html"))

 const searite=async()=>{
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      const database=client.db('LocalSphere');

      const collection = database.collection('search_items');

      const keyword = sireq.query.keyword;
      
      const result = await collection.find({ category: { $regex: keyword, $options: 'i' } }).toArray();
  
      if (result.length > 0) {
        res.send({ status: "success", items: result });
      } else {
        res.send({ status: "error", message: "No items found" });
      }
   res.end()
 }
  
  searite()
})






})