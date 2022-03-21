const { redirect } = require('express/lib/response')
const {Flight} = require('../model/flight')
const Ticket = require("../model/ticket")

// display all the flights that have been added to DB
async function index (req, res) {
    let flights = await Flight.find({})
    res.render("../view/index.ejs", {flights});
}

// renders EJS form page
function flight_create_get(req, res){
    res.render("../view/add.ejs", {data:Flight})
}

// // HTTP POST - Adds it to the DB
function flight_create_post(req, res){
    req.body.airport = req.body.airport || Flight.airport
    req.body.departs = req.body.departs || Flight.departs
    let flight = new Flight(req.body);

    // Save Article
    flight.save()
    .then(() => {
        res.redirect("/flight/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please select an Airline!");
    });
}
// HTTP GET - Flight Index
async function flight_index_get(req, res) {
    let flight = await Flight.findById(req.params.id)
    let tickets = await Ticket.find({flight:flight.id})
    res.render("../view/detail.ejs", {flight, tickets}) // moment : moment

};


async function destination_post(req, res){
    let flight = await Flight.findById(req.params.id)
    flight.destinations.push(req.body)
    await flight.save()
    res.redirect(`/flight/${req.params.id}`)
}


module.exports = {index, flight_create_get,flight_create_post, flight_index_get,destination_post};