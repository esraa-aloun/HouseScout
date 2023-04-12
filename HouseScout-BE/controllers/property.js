const Property = require("../models/Property")
const IntrestedProperty = require("../models/IntrestedProperty")


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