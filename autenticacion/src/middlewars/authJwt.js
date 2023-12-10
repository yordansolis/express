import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {

    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({ msg: 'No token provided' });
    }
    try {

        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        const user = await User.findById(req.userId, { password: 0 });

        if (!user) {
            return res.status(404).json({ msg: 'No user found' });
        }
        next()
    } catch (error) {
        return res.status(401).json({ msg: 'Unauthorized' });
    }
}

export const isModerador = async (req, res, next) => {


    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    
    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        }
    }
    return res.status(403).json({ msg: 'Require Moderator Role!' });
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    
    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        }
    }
    return res.status(403).json({ msg: 'Require Admin Role!' });
}
