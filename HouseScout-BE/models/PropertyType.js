const mongoose = require('mongoose');



const PropertyTypeSchema = mongoose.Schema({
    typeName: {
        type: String,
                
    }

},
{
    timestamps: true
})




const PropertyType = mongoose.model("PropertyType", PropertyTypeSchema);

// Exports
module.exports = PropertyType;