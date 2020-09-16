import "core-js";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config();
import { router } from "./router";

const PORT = process.env.PORT || 3000;
const sequelize = require('./models').sequelize;

const app = express();

sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);


const handleListening = () => console.log(`Listening on: http://localhost in port ${PORT}`);
app.listen(PORT, handleListening);