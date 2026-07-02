# Regex Validator API

A simple REST API built with Node.js and Express.js to validate user input using Regular Expressions (Regex).

## Features

- Username Validation
- Email Validation
- Password Validation
- Phone Number Validation
- Returns detailed validation errors
- JSON API responses

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Regular Expressions (Regex)

## Installation

```bash
git clone https://github.com/your-username/regex-validator-api.git
cd regex-validator-api
npm install
npm start
```

Server runs on:

```
http://localhost:3000
```

## API Endpoint

### Validate User

**POST**

```
/validate
```

### Request Body

```json
{
  "username": "abhishek_12",
  "email": "abc@gmail.com",
  "password": "Password123",
  "phone": "9876543210"
}
```

### Success Response

```json
{
  "success": true,
  "message": "All fields are valid",
  "data": {
    "username": "abhishek_12",
    "email": "abc@gmail.com",
    "phone": "9876543210"
  }
}
```

### Error Response

```json
{
  "success": false,
  "errors": {
    "username": "Invalid Username",
    "email": "Invalid Email",
    "password": "Invalid Password",
    "phone": "Invalid Phone Number"
  }
}
```

## Validation Rules

| Field | Rule |
|--------|------|
| Username | 3–15 characters, letters, numbers and underscore only |
| Email | Must be a valid email format |
| Password | Minimum 8 characters with uppercase, lowercase and one number |
| Phone | Must be a valid 10-digit Indian mobile number |

## Author

Abhishek Panwar