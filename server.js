//requires
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routers/users");
const companiesRouter = require("./routers/companies");
const jobsRouter = require("./routers/jobs");
const applicationsRouter = require("./routers/applications");
const cookieParser = require('cookie-parser');

//app
const app = express();
const cors = require("cors");
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  // Add more origins as needed
];

const corsOptions = {
  origin: allowedOrigins,
};

// Allow requests from 'http://localhost:3000'
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(cors(corsOptions));

//middleware
app.use(express.json());

//routers
app.use("/users", usersRouter);
app.use("/companies", companiesRouter);
app.use("/applications", applicationsRouter);
app.use("/jobs", jobsRouter);

//database and server connections
mongoose
  .connect("mongodb+srv://mohammadaldoer:Fev78fpQovovxBQ6@cluster0.ojpsgxa.mongodb.net/loginProject?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
    app.listen(8000, () => {
      console.log(`app is listening on port ${8000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
