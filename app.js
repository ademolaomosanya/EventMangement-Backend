const urlencoded = require("body-parser/lib/types/urlencoded");
const express = require("express");
const Joi = require("joi");
var cors = require('cors')
const validator = require("express-joi-validation").createValidator({
  passError: true,
});
const app = express();
app.use(express.json());
const port = 5000;
const userData = [];

const signupQuerySchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(15).required(),
});

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World, from Ademola Omosanya");
});

app.post("/signup", validator.body(signupQuerySchema), (req, res) => {
  const user = req.body;
  console.log("next");
  userData.find((value, index) => {
    value.email === user.email;
    return res.status(409).json({
      statusCode: 409,
      message: "User with the provided Email already exist",
      data: null,
    });
  });

  userData.push(user);
  console.log(userData);
  return res.status(201).json({
    statusCode: 201,
    message: "Account created sucessfully",
    data: user,
  });
});

app.use((err, req, res, next) => {
  console.log("req", req.body);
  if (err && err.error && err.error.isJoi) {
    console.log(Object.values(err.error.isJoi));
    res.status(400).json({
      type: err.type,
      message: err.error.toString(),
      statusCode: 400,

      data: null,
    });
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`Hello World listening to ${port}`));
