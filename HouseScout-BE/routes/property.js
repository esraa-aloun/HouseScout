const express = require('express');

const router = express.Router();

router.use(express.json());

let methodOverride = require("method-override");
router.use(methodOverride('_method'));


const isLoggedIn = require("../helper/isLoggedIn");
const propertyCntrl = require("../controllers/property");


router.post("/property/add", propertyCntrl.property_create_post);
router.get("/property/houses", propertyCntrl.property_houses_get);
router.get("/property/apartments", propertyCntrl.property_apartments_get);
router.get("/property/studios", propertyCntrl.property_studios_get);

router.post("/property/addIntrestedProperty", propertyCntrl.property_add_to_intrestedProperty_post);
router.get("/property/IntrestedProperty", propertyCntrl.property_intrestedProperty_get);

router.get("/property/myPropertise", propertyCntrl.property_myPropertise_get);




// router.put("/proprty/update",isLoggedIn, propertyCntrl.property_update_put);

router.delete("/property/delete", propertyCntrl.property_delete);

module.exports = router;