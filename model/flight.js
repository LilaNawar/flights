const req = require("express/lib/request")
const res = require("express/lib/response")
// Dependencies
const { accepts } = require("express/lib/request");
const mongoose = require("mongoose");

const destinationSchema = mongoose.Schema({
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type: Date},
},
{
    timestamps: true // means createdAt and updatedAt
})

const flightSchema = mongoose.Schema({
    airline: {type: String, enum:['American', "SouthWest", "United"],required:true},
    airport: {type: String, default:'DEN', enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, min:10, max:9999},
    departs: {type: Date, default: Date.now() + 365*24*60*60*1000},
    destinations: {type:[destinationSchema]}
},
{
    timestamps: true // means createdAt and updatedAt
})




// Create Model with the name Flight
const Flight = mongoose.model("Flight", flightSchema);
const Destination = mongoose.model("Destination", destinationSchema);



module.exports ={Flight, Destination}