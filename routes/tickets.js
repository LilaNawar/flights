//import express 
const express = require('express')

const router = express.Router();

// import controller
const ticketCntrl = require("../controller/ticket.js")


router.get("/ticket/:id/new", ticketCntrl.ticket_create_get);
router.post("/ticket/:id/new", ticketCntrl.new_ticket_post);










module.exports = router;