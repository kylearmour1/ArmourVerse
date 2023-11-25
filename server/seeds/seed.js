const db = require("../config/connection");
const { User, Comment } = require("../models"); // Corrected 'Comment'
const userSeeds = require("./userSeeds.json");
const commentSeeds = require("./commentSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Comment.deleteMany({}); // Corrected 'Comment'
    await Comment.create(commentSeeds);

    console.log("All seeds planted successfully!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
