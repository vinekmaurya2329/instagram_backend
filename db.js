const mongoose = require('mongoose');
const URL = process.env.MONGODB
mongoose.connect(URL)
.then(()=>{
    console.log('Db connected successfully');
}).catch((err)=>{
    console.log('error while connecting DB');
})
module.exports = mongoose 