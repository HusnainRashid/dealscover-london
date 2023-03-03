const express = require("express");
const router = express.Router();

const EventsController = require("../controllers/events");

router.get("/", EventsController.Index);


module.exports = router;