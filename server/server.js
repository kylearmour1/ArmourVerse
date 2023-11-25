// const express = require("express")
// const mongoose = require("mongoose")
// const app = express();
// const uri = 'mongodb://127.0.0.1:27017/armourverse';


// async function connect () {
//     try{
//         await mongoose.connect(uri)
//         console.log("Connected to MongoDB")
//     }catch (error) {
//         console.error(error)
//     }
// }

// connect();
// app.listen(3001, () => {

// console.log("server started at 3001")
// });

const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
const postRoutes = require('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors');


dotenv.config();

const uri = process.env.MONGODB_URI;


async function connect () {
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    }catch (error) {
        console.error(error)
    }
}



app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);


connect();
app.listen(3001, () => {

console.log("server started at 3001")
});

