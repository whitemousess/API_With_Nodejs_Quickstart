const express = require("express");
const router = express.Router();

const mainControllers = require("../Controllers/itemController");

// get all items 
router.get("/", mainControllers.show);

module.exports = router;