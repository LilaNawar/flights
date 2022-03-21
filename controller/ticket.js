const { redirect } = require('express/lib/response')
const {Flight} = require('../model/flight')
const Ticket = require("../model/ticket")


async function ticket_create_get(req, res){
    res.render('../view/newticket.ejs', {flightId:req.params.id})
}

// // HTTP POST - Adds it to the DB
async function new_ticket_post(req, res){
    req.body.flight = req.params.id
    await Ticket.create(req.body)
    res.redirect(`/flight/${req.params.id}`)
}


// this will be to display all the seats that are taken for that flight number
// function flight_tickets_post(req, res){
//     Flight.findById(req.params.id, function(err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets) {

//         });
//     });
// }


module.exports = {ticket_create_get, new_ticket_post}