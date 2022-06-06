'use strict';

function serverError(error,req,res,next){

    res.status(500).json({
        code:500,
        massage:`Server Error ${error}`
    })
}

module.exports=serverError;