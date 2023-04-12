const mongoose = require('mongoose');


const favouriteListSchema = mongoose.Schema({
    client_id: {
        type:String,
    },
    property_id: {
        type:String,

    }
    

},
{
    timestamps: true
})


const FavouriteList = mongoose.model("FavouriteList", favouriteListSchema);

// Exports
module.exports = FavouriteList;