const IntrestedProperty = require("../models/IntrestedProperty")


exports.property_add_to_intrestedProperty_post = (req,res) =>{
    console.log(req.body)
    let intProperty = new IntrestedProperty(req.body)

    intProperty.save()
    .then((intProperties) =>{
        res.json({intProperties})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

exports.property_intrestedProperty_get = (req,res) =>{

    IntrestedProperty.find({owner_id : req.query.id})
    .then(intProperties => {
        
        res.json({intProperties:intProperties})
    })
    .catch(err => {
        console.log(err);
    })

}