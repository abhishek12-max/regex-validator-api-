const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Regex Validator API is running"
    });
});

app.post("/validate", (req, res) => {
       const { username, email, password } = req.body;

    const usernameRegex = /^[A-Za-z0-9_]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

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

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Password"
        });
    }

    res.json({
        success: true,
        message: "Username, Email and Password are valid"
    });

});


  

app.listen(3000, () => {
    console.log("Server Running...");
});