const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Regex Validator API is running"
    });
});

app.post("/validate", (req, res) => {

    res.json({
        message: "Validation endpoint created",
        data: req.body
    });

});
app.listen(3000, () => {
    console.log("Server Running...");
});