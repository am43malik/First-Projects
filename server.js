const express = require('express');
const Errorhandler = require('./error/errorHandler');
const app= express()
const user= require('./routes/userRoutes')
const PORT= process.env.PORT || 3000
app.use('/',user)



app.use((req,res,next)=>{ 
    return res.json({message:'Page Not Found'})
    
})
  
app.use((error,req,res,next)=>{
     

    if(error instanceof Errorhandler){
        res.status(error.status).json({
            error:{
                message:error.meassage,
                status:error.status
            }
        })
    }
   


//    res.status(400).json({message:error.message})
    console.log(error,'error')
    next( )

})



app.listen(PORT,()=>{
    console.log(`Port Running on ${PORT}`)
})