const mongoose = require('mongoose');


const favouriteListSchema = mongoose.Schema({
    // client_id: {
    //     type:String,
    // },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    property_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }],
    // property_id: {
    //     type:String,

    // }
},
{
    timestamps: true
})


const FavouriteList = mongoose.model("FavouriteList", favouriteListSchema);

// Exports
module.exports = FavouriteList;