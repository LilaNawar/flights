//import express 
const express = require('express')

const router = express.Router();
// import controller
const flightCntrl = require("../controller/flights.js")

router.get('/flight/index', flightCntrl.index);

router.get("/flight/add", flightCntrl.flight_create_get);
router.post("/flight/add", flightCntrl.flight_create_post);
router.post("/flight/:id/destinations", flightCntrl.destination_post)

router.get("/flight/:id", flightCntrl.flight_index_get);









module.exports = router;