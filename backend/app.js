const express = require("express");
const app = express();
const cors = require("cors");
require("./connection/connection");
const contact = require ("./routes/contact");


app.use(express.json());

app.use(cors())
app.use("/api/v1", contact);

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});
