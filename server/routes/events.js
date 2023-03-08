const express = require("express");
const router = express.Router();

const EventsController = require("../controllers/events");

router.get("/", EventsController.Index);
router.get('/:id', EventsController.Find);


module.exports = router;