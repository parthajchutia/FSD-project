const mongoose = require("mongoose");
const contact = new  mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    number: {
        type: "Number",
        require: true,
    },
    address: {
        type: "String",
        require: true,
    },
    state: {       
        type: "String",
        require: true,
    },
    city: {
        type: "String",
        require: true,
    },
    message: {
        type: "String",
        require: true,
    },

}) ;

module.exports = mongoose.model("contact", contact);