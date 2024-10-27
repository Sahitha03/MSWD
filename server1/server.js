const express=require('express');
const users=require('./Users');
const app=express();
app.use(express.json());
const idFilter = req => member => member.id === parseInt(req.params.id);


//GET All USERS
app.get('/api/users',(req,res)=>res.json(users));

//GET Specific USER Based on ID
app.get('/api/users/:id', (req, res) => {
    const found = users.some(idFilter(req));
  
    if (found) {
      res.json(users.filter(idFilter(req)));
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}' });
    }
  });
  //CREATE A NEW USER 
  app.post('/api/users',(req,res)=>{
    const newMember={
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      status: 'guest'
    };
    if(!newMember.name || !newMember.email){
      return res.status(400).json({msg:'NAME and EMAIL Must be provided'});
    }
    users.push(newMember);
    res.json(users);
  }
  );

const PORT=8082;
app.listen(PORT, () => console.log(`Server is Running ${PORT}`));