"use strict";

function notFound(req,res,next){
    res.status(404).json({
        code:404,
        massage:"Page not found"
    })
}

module.exports=notFound;