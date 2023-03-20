const express= require('express')
const router= express.Router()
const apimiddleware = require('../middkewares/apiKey')



// router.use(apimiddleware)

router.get('/',apimiddleware,(req,res)=>{
    res.send('Header Pass successful')
})










module.exports=router

