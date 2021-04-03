const express = require("express");

const app = express();
const postRoute = require("./src/routes/postRoute");

app.use(express.json());
app.use("/posts", postRoute);
app.listen(3000, () => console.log(`server running on port 3000`));
