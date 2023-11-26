
// const express = require("express")
// const db = require("./config/connection")
// const mongoose = require("mongoose")
// const app = express();
// const dotenv = require("dotenv")
// const postRoutes = require('./routes/api/postRoutes')
// const commentRoutes = require('./routes/api/commentRoutes')
// const cors = require('cors');


// dotenv.config();

// const uri = process.env.MONGODB_URI;


// async function connect () {
//     try{
//         await mongoose.connect(uri)
//         console.log("Connected to MongoDB")
//     }catch (error) {
//         console.error(error)
//     }
// }



// app.use(cors());
// app.use(express.json());

// app.use('/api/posts', postRoutes);
// app.use('/api/comments', commentRoutes);

// db.on("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });

  
// connect();
// app.listen(3001, () => {

// console.log("server started at 3001")
// });



const express = require("express");
const mongoose = require("mongoose"); // Import mongoose
const dotenv = require("dotenv"); // Import dotenv for environment variables
const postRoutes = require('./routes/postRoutes'); // Import routes for posts
const commentRoutes = require('./routes/commentRoutes'); // Import routes for comments
const cors = require('cors'); // Import CORS to handle cross-origin requests
const authRoutes = require('./routes/auth')

dotenv.config(); // Initialize dotenv to use environment variables

const PORT = process.env.PORT || 3001; // Define the port to use
const uri = process.env.MONGODB_URI; // Define the MongoDB URI

const app = express(); // Initialize express app
const userRoutes = require('./routes/userRoutes')
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Use express.json middleware to parse JSON payloads

// Setup API routes
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes)
app.use('/auth', authRoutes)

// Connect to MongoDB and start the server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB
    .then(() => {
        console.log("Connected to MongoDB"); // Log success message on successful connection
        // Start listening on the defined PORT only after successful MongoDB connection
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
        });
    })
    .catch((error) => {
        // Log any errors that occur during connection
        console.error("Error connecting to MongoDB:", error);
    });
