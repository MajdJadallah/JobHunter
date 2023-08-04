//requires
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routers/users");
const companiesRouter = require("./routers/companies");
const jobsRouter = require("./routers/jobs");
const applicationsRouter = require("./routers/applications");

//app
const app = express();
const cors = require("cors");

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
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
