const router = require("express").Router();

const authCtrls = require("../controllers/auth");

// /api
router.post("/login", authCtrls.login);

module.exports = router;
