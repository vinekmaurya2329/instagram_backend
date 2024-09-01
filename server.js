const express =  require('express');
const app = express();

const userModel = require('./models/userModel')
const cors = require('cors')
require('dotenv').config();
const db = require('./db')
const PORT = process.env.PORT || 4000


app.use(express.json());
app.use(cors())


app.get('/',(req,res)=>{
    res.send({
        message:"home page",
        ft:'congrats',
        lt:'success'
    })
})
app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    if(!username){
        return res.send({
            message:'please enter username',
            ft:'opps!',
            lt:'info'
        })
    }
    if(!password){
        return res.send({
            message:'please enter password',
            ft:'opps!',
            lt:'info'
        })
    }
     const user = await userModel.create({username:username,password:password});
     console.log(user,'user');
     res.send({
        message:'Invalid username or password',
        ft:'congrats',
        lt:'success'
     }) 
})
app.listen(PORT,()=>{
    console.log('server is now started on port ', `${PORT}`);
})