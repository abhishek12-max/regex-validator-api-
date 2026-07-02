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

  const { username } = req.body;

const usernameRegex = /^[A-Za-z0-9_]{3,15}$/;

if (!usernameRegex.test(username)) {
    return res.status(400).json({
        success: false,
        message: "Invalid Username"
    });
}

res.json({
    success: true,
    message: "Username is valid"
});


const { username, email } = req.body;

const usernameRegex = /^[A-Za-z0-9_]{3,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!usernameRegex.test(username)) {
    return res.status(400).json({
        success: false,
        message: "Invalid Username"
    });
}

if (!emailRegex.test(email)) {
    return res.status(400).json({
        success: false,
        message: "Invalid Email"
    });
}

res.json({
    success: true,
    message: "Username and Email are valid"
});

app.listen(3000, () => {
    console.log("Server Running...");
});