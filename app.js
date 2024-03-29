const express = require('express');
const morgan = require("morgan");
const tourRouter = require("./Routers/toursRouter");
const userRouter = require("./Routers/userRouter")


const app = express();
app.use(express.json());

if(process.env.NODE_ENV === "development"){
	app.use(morgan('dev'));
}
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
