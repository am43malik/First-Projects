const Errorhandler = require("../error/errorHandler");

function apikey (req,res,next){
    const api_key='123456'
    console.log(req.query.api_key)

    if(req.query.api_key && ( api_key === req.query.api_key)){

        next()
    }else{
    //   throw new Error('api_key in invalid!')
   next(Errorhandler.invalidapikey()) 
    }


}

module.exports =apikey;