
const express=require("express"); 
const app=express();
const notFound=require("../src/error-handlers/404");
const serverError=require("../src/error-handlers/500");
const router=require("./routes/food.route");
const clothRouter=require("./routes/clothes.route");
app.use(express.json()); 


app.use(router);
app.use(clothRouter);

app.use(serverError);
app.use("*",notFound);

function start(port){
    app.listen(port,()=>{
        console.log(`listening to the ${port}`);
    })
}


module.exports={
    app:app,
    start:start
}