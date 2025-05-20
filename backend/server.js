const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");

// env config
dotenv.config();

//routes
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

// database connection
connectDB();

// rest objects
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
// app.get("/", (req, res) => {
//   res.status(200).send({ message: "Node server" });
// });
// now we are calling for user routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080, () => {
  console.log(
    `Server Running on  ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
      .white
  );
});
