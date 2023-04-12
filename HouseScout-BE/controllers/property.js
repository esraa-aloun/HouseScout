const Property = require("../models/Property")


exports.property_myPropertise_get =(req,res) =>{

    Property.find({owner: req.query.id})
    .then(myProperties => {
        
        res.json({myProperties:myProperties})
    })
    .catch(err => {
        console.log(err);
    })

}



exports.property_delete = (req,res)=>{
    console.log(req.query.id);
    Property.findByIdAndDelete(req.query.id)
    .then((property)=>{
        res.json({property})
    })
    .catch(err => {
        console.log(err);
    })
}




exports.property_create_post = (req, res) => {
    console.log(req.body)
    let property = new Property(req.body)


    property.save()
    .then((properties) =>{
        res.json({properties})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

exports.property_houses_get = (req, res) => {

    Property.find({type :'House'})
        .then(properties => {
            
            res.json({properties:properties})
        })
        .catch(err => {
            console.log(err);
        })
}

exports.property_apartments_get = (req, res) => {

    Property.find({type :'Apartment'})
        .then(properties => {
            
            res.json({properties:properties})
        })
        .catch(err => {
            console.log(err);
        })
}

exports.property_studios_get = (req, res) => {

    Property.find({type :'Studio'})
        .then(properties => {
            
            res.json({properties:properties})
        })
        .catch(err => {
            console.log(err);
        })
}