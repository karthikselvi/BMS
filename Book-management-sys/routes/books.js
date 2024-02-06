const express=require("express");
const route=express.Router();
const Book=require("../models/book");

//post method:add books 
route.post("/",async(req,res)=>{
    const book=new Book({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        
    })

    try{
        const saveBook=await book.save();
        res.send(saveBook);
    }

    catch(error){
        res.status(404).send(error);

    }
})
//get get all the books
route.get("/",async(req,res)=>{
    try{
        const books=await Book.find();
        res.send(books);
    }
    catch{(error)
        res.status(404).send(error);
    }
})
//put updatea book

route.put("/:id",async(req,res)=>{
    try{
        const book=await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.send(book);
    }
    catch(error){
        res.status(404).send(error);
    }
})

//delete a book
route.delete("/:id",async(req,res)=>{
    try{
        const book=await Book.findByIdAndRemove(req.params.id);
    }
    catch(error){
        res.status(404).send();





    }
})

module.exports=route;