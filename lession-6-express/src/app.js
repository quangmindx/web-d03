const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/users.router");
const app = express();

app.use(bodyParser.json());

app.use("/users", userRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
