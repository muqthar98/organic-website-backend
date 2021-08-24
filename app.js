import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Connection from "./database/db.js";
import { userData, productData } from "./DefaultData/default.js";
import Routes from "./routes/routes.js";

const app = express();

//middleware
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

app.get('/', (req, res) => {
    res.send('Server is running successfully....')
  })

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running sucessfully on ${PORT}`));

userData();

productData();
