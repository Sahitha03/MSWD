const {MongoClient}=require("mongodb");
const uri="mongodb+srv://admin:admin@cluster0.rabe3mf.mongodb.net/test";
const client=new MongoClient(uri);
async function run(){
 try{
  await client.connect();
  const database=client.db("first");
  const fc=database.collection("student");
  //Insert ONE
   /*const doc={Mname:"NARUTO",Mc:"UZUMAKI NARUTO", Mprice:"600"};
   const result=await fc.insertOne(doc);
  console.log(insert success);*/


  //InsertMANY
  /*const doc=[
    {Mname:"NARUTO",Mc:"UZUMAKI NARUTO", Mprice:"600"},
    {Mname:"One Piece",Mc:"Luffy",Mprice:"10000"},
    {Mname:"AOT",Mc:"EREN EAGER",Mprice:"600"},
    {Mname:"EOS",Mc:"ATOM",Mprice:"200"},
    {Mname:"Haikyu",Mc:"Hinata",Mprice:"900"},
    {Mname:"Haikyu",Mc:"Hinata",Mprice:"900"}
    
  ];
  const result=await fc.insertMany(doc);
  console.log(documents were inserted);*/

  //FindOne
  /*const filter={Mname:"AOT"};
  const result=await fc.findOne(filter);
  console.log(result);*/

 //DeleteOne
  /*const filter={Mprice:"200"};
  const result=await fc.deleteOne(filter);
  console.log(result);*/

  //deleteMany
  /*const filter={Mc:"Hinata"};
  const result=await fc.deleteOne(filter);
  console.log(Documents were deleted);*/

  //replaceOne
  /*const filter={Mname:"AOT"}
  const doc={
    Mname:"GINATAMA",
    Mc:"GIN",
    Mprice:"700"
  };
  const result=await fc.replaceOne(filter,doc);
  console.log(Document is replaced);*/

 // UpdateOne
  /*const filter={Mprice:"700"};
  const doc={
    $set:{Mprice:"300"},
  };
  const result=await fc.updateOne(filter,doc);
  console.log(docs are updated);*/

  //UpdateMany
 /* const filter={Mprice:"Uzumaki Naruto"};
  const doc={
    $set:{Mprice:"1000"},
  };
  const result=await fc.updateMany(filter,doc);
  console.log(docs are updated);*/
  

 // const res=fc.find().sort().toArray()
  //console.log(res)
  
  /*
  const sort={Mc:1}// const filter = { price: { $gte: 100, $lte: 800 } };
  const res=await fc.find({}).sort(sort).toArray()
 console.log(res)
 console.log(sorted)



 }
 finally{
  await client.close();
 }
}
run().catch(console.dir);

*/