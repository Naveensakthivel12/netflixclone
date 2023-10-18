const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
 const userRoute = require("./routes/users");
 const movieRoute = require("./routes/movies");
 const listRoute = require("./routes/list");

dotenv.config();
const  URL=`mongodb+srv://user2004:1234@cluster0.c8yxodw.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(URL
).then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
 app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});