const express =require('express');
const app=express();

app.use(express.json());

app.post('/chat')





app.listen(3000,()=>{
  console.log("Listening at port 3000");
  
})

