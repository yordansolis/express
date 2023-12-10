import { ROLE } from "../models/Role.js";
 import User from "../models/User.js";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const user = await User.findOne({ username: req.body.username });
    
    if (user) {
        res.status(400).send({
            message: "Failed! Username is already in use!"
        });
        return;
    }

    if (req.body.email) {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }
        
    }
    //continuars
    next();
}

export const checkRolesExited = async (req, res, next) => {
    
    if (req.body.roles) {

        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLE.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }

    }
      
    next();
}
