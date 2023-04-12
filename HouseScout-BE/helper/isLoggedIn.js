// module.exports = (req, res, next) => {
//     if(!req.user){
//         res.redirect("/auth/signin")
//     }
//     else
//     {
//         next();
//     }
// }

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {

    let token = ""
    //here we will have access to the request header
    var authorizationToken = req.header("Authorization");
    console.log(authorizationToken);

    if(authorizationToken){
        //by default there is a prefix 'Bearer' , so we need to get rid of it
        authorizationToken = authorizationToken.replace("Bearer ", "");
        console.log(authorizationToken);
        token = authorizationToken;
    }

    if(!token){
        return res.status(401).json({"message": "Ahaaan!!!! You are not allowed to view this as this is protected"})
    }

    try{
        // verify is a JWT method
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({"message": "Your token is invalid"})
    }

}