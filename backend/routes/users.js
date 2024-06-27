const express = require("express");
const { register, login,customerFeedBake } = require("../controllers/users");

// define router
const usersRouter = express.Router();

/*
 * Testing Routes:
 * POST -> http://localhost:5000/users/register
 * POST -> http://localhost:5000/users/login
 */



usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/customerfeedbake",customerFeedBake)

module.exports = usersRouter;
