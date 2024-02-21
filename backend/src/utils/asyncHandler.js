//this  asyncHandelar is a haigher order funtion 
const asyncHandler =(requestHandler)=>{
    return (req,res,next)=>{
     Promise.resolve(requestHandler(req,res,next))
     .catch((err)=>{
          next(err) // its a middleware
      })
    }
  }
  
  export {asyncHandler}