const FavouriteList = require("../models/FavouriteList")

exports.property_add_to_favourite_post = (req,res) =>{
   
    let fav = new FavouriteList(req.body)

    fav.save()
    .then((favP) =>{
        res.json({favP})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });

}

exports.property_favourite_list_get = (req,res) =>{

    FavouriteList.find({client_id: req.query.id})
    .then(favList => {
        
        res.json({favList:favList})
    })
    .catch(err => {
        console.log(err);
    })

}

