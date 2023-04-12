const mongoose = require('mongoose');


const IntrestedPropertySchema = mongoose.Schema({
    property_id:{
        type:String,

    },
    owner_id:{
        type:String,
    },
    client_id:{
        type:String,
    },
    property_location:{
        type:String,
    }


},
{
    timestamps: true
})


const IntrestedProperty = mongoose.model("IntrestedProperty", IntrestedPropertySchema);

// Exports
module.exports = IntrestedProperty;