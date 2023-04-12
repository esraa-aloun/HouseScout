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

