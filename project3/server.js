const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;

const app = express();

//Connect Database

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/" + "Project3-Love";
// Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
// open the connection to mongo
db.on("open", () => {});

//Init Middleware

app.use(express.json({ extended: false, limit: "50mb" }));

//ROUTES CONFIGURATION

app.use("/api/users", require("./routes/user/UserControllers"));
app.use("/api/auth", require("./routes/auth/authenticationController"));
app.use(
  "/api/research",
  require("./routes/collections/ResearchCollectionsController")
);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client-view/build'));
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client-view', 'build', 'index.html'))
//   );
// }
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
