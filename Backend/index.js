const bodyParser = require("body-parser");
const express = require("express");


const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
