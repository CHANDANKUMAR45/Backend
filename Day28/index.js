import expess from "express";
import main from "./aichat.js";
const app=express();

app.use(express.json());

app.post("/chat",async(req,res)=>{
  const {msg}=req.body;

 const ans= await main(msg);

 res.send(ans);

});


app.listen(3000,()=>{
  console.log("Listening at port 3000");
  
});

