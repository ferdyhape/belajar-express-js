const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/user");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  req.time = new Date();
  next();
};

// melakukan use middleware myLogger
app.use(myLogger);

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
    date: req.time,
  });
});

// route dengan prefix /user
app.use("/user", userRoutes);

// redirect request
app.get("/about", (req, res) => {
  res.redirect("https://expressjs.com/");
});

// http send status (https://expressjs.com/en/5x/api.html#res.sendStatus)
app.get("/status", (req, res) => {
  res.sendStatus(200);
});

// route dengan method get, post, put, delete
app
  .route("/article")
  .get(function (req, res) {
    res.send("Get Article");
  })
  .post(function (req, res) {
    res.send("Post Article");
  })
  .put(function (req, res) {
    res.send("Put Article");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, Ferdy!`);
});
