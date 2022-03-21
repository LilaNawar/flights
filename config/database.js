// Dependencies
const { accepts } = require("express/lib/request");
const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
    airline: {type: String, enum:['American', "SouthWest", "United"]},
    airport: {type: String, default:"DEN", enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, min:10, max:9999},
    departs: {type: Date, default: "One year from date created"}
},
{
    timestamps: true // means createdAt and updatedAt
});


// Create Model with the name Flight
const Flight = mongoose.model("Flight", flightSchema);

module.exports = {Flight};