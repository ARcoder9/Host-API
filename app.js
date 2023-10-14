
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000 ;

const connectDB = require('./db/connect')

const product_routes = require('./routes/products')

app.get("/",(req,res)=>{
    res.send("Hi I am Live ");
});

app.use("/api/products", product_routes)

const start = async () =>{
    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am Connected`);
        });
    } catch(error){
        console.log(error);
    }
};

start();