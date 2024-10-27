const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://admin:admin@cluster0.rabe3mf.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(uri);

 


client.connect();
var db = client.db("s16");
//var col = db.collection("user");


app.get('/',(request,response) => {
  response.send('This is a Server')
})

col1 =db.collection("stu_data") 
app.post('/insert_stu',(req,res)=>{
  console.log(req.body)
  col1.insertOne(req.body)
  res.send(req.body)
  })
app.get('/show_one_stu',(req,res)=>{
  async function find(){
    try{
      const result=await col1.findOne()
      if(result == null)
{
  res.send({"Data_Retrieval":"Fail"})
}
else{
  res.send(result)
}
    }
  finally{}
  }
  find().catch(console.dir)
})
//show all
app.get('/show_all',(req,res)=>{
  async function find(){
    try{
      const result=await col1.find().toArray()
      console.log(result)
      if(result == null)
{
  res.send({"Data_Retrieval":"Fail"})
}
else{
  res.send(result)
}
    }
  finally{}
  }
  find().catch(console.dir)
})
//show all at gt1
app.get('/show_all_gt1',(req,res)=>{
  async function find(){
    try{
      const result=await col1.find({stu_id:{$gte:1}}).toArray()
      console.log(result)
      if(result == null)
{
  res.send({"Data_Retrieval":"Fail"})
}
else{
  res.send(result)
}
    }
  finally{}
  }
  find().catch(console.dir)
})
app.patch('/update_stu',(req,res)=>{
  //col1=db.collection("stu_data")
  const doc ={
    $set:{stu_dept:"BT",stu_address:"tuni"}
  }
  col1.updateOne({stu_id:2100031791},doc)
  res.send("updated succesfully")
})
app.delete('/delete_stu',(req,res)=>{
  const doc ={
    $set:{stu_name:"lucky",stu_dept:"BT",stu_address:"1200"}
  }
  col1.deleteOne({stu_id:2100031680},doc)
  res.send("deleted succesfully")
})




app.listen(8082)
//localhost:8081
console.log("server started")