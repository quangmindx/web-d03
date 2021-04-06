const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/user/login", userRoute);

app.listen(port, () => console.log(`server running on port ${port}`));
