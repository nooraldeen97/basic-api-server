require("dotenv").config();

const server=require("./src/server");
const {db}=require("./src/models/index")
const port = process.env.PORT || 3000;



db.sync().then(()=>{
    server.start(port);

}).catch(error=>{
    console.log(error)
})
