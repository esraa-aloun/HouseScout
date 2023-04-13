const FavouriteList = require("../models/FavouriteList")
const Property= require("../models/Property")

exports.property_add_to_favourite_post = (req,res) =>{
   
    let fav = new FavouriteList(req.body)

    FavouriteList.find({client_id: req.body.client_id})
    .then(client => {
        console.log("client", client)
        console.log(client[0])
        if(client != null){
            console.log("Added to already existing record")
            console.log("req.body.client_id ", req.body.client_id )
            console.log("req.body.property_id", req.body.property_id)
            FavouriteList.updateOne(
                { client_id: req.body.client_id }, 
                { $push: { property_id: req.body.property_id} },
            ).then(res => {
                console.log("res, ", res)
                client[0].save()
            })
            .catch(err =>{
                console.log("err",err)
            });
        }
        else
        {
            console.log("Save a new record")
            fav.save()
            .then((favP) =>{
                res.json({favP})
            })
            .catch((err) => {
                console.log(err);
                res.send("Please try again later");
            });
        }
    })
    .catch(err => {
        console.log(err)
    })
}

exports.property_favourite_list_get = (req,res) =>{

    // FavouriteList.findById(req.query.id).populate('property_id')
    FavouriteList.find({client_id: req.query.id}).populate('property_id')
    .then(favList => {

        // Property.findById(favList)
        console.log(favList)
        // console.log(favList[0].property_id)
        res.json({favList})
    })
    .catch(err => {
        console.log(err);
    })

}

