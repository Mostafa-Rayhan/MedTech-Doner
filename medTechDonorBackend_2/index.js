const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://asad000:A3PpEWT68oIMXgGp@cluster0.ihkbb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const db = client.db("med-tech");
    const blogCollection =  db.collection("blogs");
    const adminCollection =  db.collection("admins");
    const memberCollection =  db.collection("members");
    const appointmentCollection =  db.collection("appointments");
    const donatesCollection =  db.collection("donates");
    const reqCollection =  db.collection("req");



    app.get("/req", async (req, res) => {
      const result = await reqCollection.find({}).toArray();
      res.send(result);

    });

    app.post("/req", async (req, res) => {
      const body = req.body;
      console.log("b", body);
      const newBlog = await reqCollection.insertOne(body);
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.patch("/req/:id", async (req, res) => {
      const body = req.body;
      // console.log("body", body);
      const id=req.params.id
      console.log("id", id );
      const query = { _id: new ObjectId(id) };
      const updatedData = {
        $set: body
    }
      const newBlog = await reqCollection.updateOne(query,updatedData);
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.get("/req/:email", async (req, res) => {
      // const id = req.params.id;
      const email=req.params.email;
      // const query = { user_id: id};
      const query = { reciever_email : email};
      console.log(email);
      // console.log("id", id);
      const result = await reqCollection.find(query).toArray(); 
      res.send(result);

    });



    app.get("/donate", async (req, res) => {
      const result = await donatesCollection.find({}).toArray();
      res.send(result);

    });
    app.post("/donate", async (req, res) => {
      const body = req.body;
      console.log("b", body);
      const newBlog = await donatesCollection.insertOne(body);
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.get("/donate/:email", async (req, res) => {
      // const id = req.params.id;
      const email=req.params.email;
      // const query = { user_id: id};
      const query = { email: email};
      console.log(email);
      // console.log("id", id);
      const result = await donatesCollection.find(query).toArray();
      res.send(result);

    });

      // appointments

      app.get("/appointment-request/:id", async (req, res) => {
        const id = req.params.id;
        const query = { user_id: id};
        console.log("id", id);
        const result = await appointmentCollection.find(query).toArray();
        res.send(result);

      });
      app.get("/appointment-request", async (req, res) => {
        const result = await appointmentCollection.find({}).toArray();
        res.send(result);

      });
      app.post("/appointment-request", async (req, res) => {
        const body = req.body;
        const newBlog = await appointmentCollection.insertOne(body);
        res.send(newBlog);
        // console.log(newBlog);
      });

      app.patch("/appointment-request/:id", async (req, res) => {
        const body = req.body;
        // console.log("body", body);
        const id=req.params.id
        console.log("id", id );
        const query = { _id: new ObjectId(id) };
        const updatedData = {
          $set: body
      }
        const newBlog = await appointmentCollection.updateOne(query,updatedData);
        res.send(newBlog);
        // console.log(newBlog);
      });



    // member
    app.get("/member", async (req, res) => {
      // const body = req.body;
      // console.log("body", body);
      const newBlog = await memberCollection.find({}).toArray();
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.post("/member", async (req, res) => {
      const body = req.body;
      const newBlog = await memberCollection.insertOne(body);
      res.send(newBlog);
      // console.log(newBlog);
    });


    app.patch("/member/:id", async (req, res) => {
      const body = req.body;
      // console.log("body", body);
      const id=req.params.id
      const query = { _id: new ObjectId(id) };
      const updatedData = {
        $set: body
    }
      const newBlog = await memberCollection.updateOne(query,updatedData);
      res.send(newBlog);
      // console.log(newBlog);
    });

    // admin
    app.get("/admin", async (req, res) => {
      // const body = req.body;
      // console.log("body", body);
      const newBlog = await adminCollection.find({}).toArray();
      res.send(newBlog);
      // console.log(newBlog);
    });
    app.post("/admin", async (req, res) => {
      const body = req.body;
      console.log("body", body);
      const newBlog = await adminCollection.insertOne(body);
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.delete("/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await adminCollection.deleteOne(query);
      res.send(result);
    });

    // get all blogs
    app.get("/blog", async (req, res) => {
      const blogs = await blogCollection.find({}).toArray();
      res.send(blogs);
      // console.log(blogs);
    });

    //  create new blog
    app.post("/blog", async (req, res) => {
      const body = req.body;
      const newBlog = await blogCollection.insertOne(body);
      res.send(newBlog);
      // console.log(newBlog);
    });

    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await blogCollection.findOne(query);
      res.send(result);
    });

    app.delete("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await blogCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/blog/comment/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      // const updatedToy = req.body;
      const prev = await blogCollection.findOne(filter);
      const toy = {
        $set: {
          // photo: updatedToy.photo,
          // name: updatedToy.name,
          // sellerName: updatedToy.name,
          // email: updatedToy.email,
          // subCategory: updatedToy.subCategory,
          // price: updatedToy.price,
          // rating: updatedToy.rating,
          // quantity: updatedToy.quantity,
          // description: updatedToy.description,
          comments :[
            ...prev.comments,req.body
          ]
        },
      };

      // const toy={
      //   $set :req.body
      // }
      const result = await blogCollection.updateOne(filter, toy, options);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("toy server is Running");
});

app.listen(port, () => {
  console.log(`Toy server running on port: ${port}`);
});
