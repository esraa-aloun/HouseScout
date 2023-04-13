const mongoose = require('mongoose');


const propertySchema = mongoose.Schema({
    owner: {
        type:String,
    },
    type:{
        type:String,
        default: "House",
        
    },
    location: {
        type: String,
        required: true,        
    },
    price: {
        type: Number,
        required: true,
    },
    floor: {
        type: Number,
        require: true,
    },
    room: {
        type: Number,
        require: true,
    },
    master: {
        type: Number,
        require: true,
    },
    kitchen: {
        type: Number,
        require: true,
    },
    bathRoom: {
        type: Number,
        require: true,
    },
   
    offerType: {
        type: String,
        require: true,
    },
    furnished: {
        type: String,
        require: true
    } 

},
{
    timestamps: true
})


const Property = mongoose.model("Property", propertySchema);

// Exports
module.exports = Property;