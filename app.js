/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { connectMongo } = require("./src/db/connection");

const { filesRouter } = require("./src/routers/filesRouter");

const { errorHandler } = require("./src/helpers/apiHelpers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", filesRouter);
app.use(errorHandler);