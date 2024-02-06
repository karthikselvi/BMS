const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const bookRouter=require("./routes/books")
const app=express();

 
app.use(bodyParser.json());



mongoose
  .connect( "mongodb://127.0.0.1/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

 app.use("/api/books",bookRouter);
 app.use(express.static("public"))

const port=8080;
app.listen(port,console.log(`listening on port${port}`));