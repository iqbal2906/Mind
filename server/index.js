const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts.js");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Gallery Q");
});

const CONNECTION = `mongodb+srv://${process.env.USERNAME_MONGO}:${process.env.PASSWORD_MONGO}@mymindcluster.zx6dm.mongodb.net/<dbname>?retryWrites=true&w=majority`;
console.log(CONNECTION);
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server running on PORT : ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
