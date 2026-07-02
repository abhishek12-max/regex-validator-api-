const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Regex Validator API is running"
    });
});

app.post("/validate", (req, res) => {

    const { username, email, password, phone } = req.body;

    const usernameRegex = /^[A-Za-z0-9_]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const errors = {};

    if (!usernameRegex.test(username)) {
        errors.username = "Invalid Username";
    }

    if (!emailRegex.test(email)) {
        errors.email = "Invalid Email";
    }

    if (!passwordRegex.test(password)) {
        errors.password = "Invalid Password";
    }

    if (!phoneRegex.test(phone)) {
        errors.phone = "Invalid Phone Number";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    res.status(200).json({
        success: true,
        message: "All fields are valid",
        data: {
            username,
            email,
            phone
        }
    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});