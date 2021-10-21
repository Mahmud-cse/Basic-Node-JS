const express = require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from my secondd ever node ok,nice')
})

const users=[
    {id:0,name:"Mahmud",email:"mahmud@gmail.com"},
    {id:1,name:"Hasa",email:"mahmud@gmail.com"},
    {id:2,name:"Redoy",email:"mahmud@gmail.com"},
    {id:3,name:"Khan",email:"mahmud@gmail.com"}
]

app .get('/users',(req,res)=>{
    const search= req.query.search;
    if(search){
        const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
});

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('post got hitted',req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]; 
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(["mango","oranges","banana","apple"])
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})