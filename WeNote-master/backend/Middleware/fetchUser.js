const jwt = require("jsonwebtoken");
const jwtSK = "1234567890qwertyuiop";
const userModel = require("../models/users");
const fetchUsers = async (req,res,next)=>{
    var a = req.header("Token");
    try {
        decoded = jwt.verify(a,jwtSK);
        
        user = await userModel.findOne({ email: decoded.UID }).select("-password");
        if (user) {
            req.body.success = true;
            req.body.user = user; 
        }
        else{
            res.send({success:false,msg:"Login First"});
        }
    } catch (error) {
        res.send({success:false,msg:"System Error"});
    }
    next();
}
module.exports = fetchUsers;