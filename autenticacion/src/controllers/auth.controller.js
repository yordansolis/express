import jwt from 'jsonwebtoken'; //importamos jwt
import User from "../models/User"; //importamos el modelo
import Role from "../models/Role"; //importamos el modelo
import { SECRET } from '../config'; //clave secreta

// signup para crear un usuario
export const signup = async (req, res) => {

    //obtenemos los datos
    const { username, email, password, roles } = req.body;

    // creamos un usuario
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    // buscamos los roles
    if (roles) {
        // buscamos los roles
        const foundRoles = await Role.find({ name: { $in: roles } });
        // asignamos los roles
        newUser.roles = foundRoles.map((role) => role._id);
    } else {
        // si no hay roles creamos uno
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }
    // guardamos el usuario
    const savedUser = await newUser.save(); //console.log(savedUser);

    // creamos el token de acceso y que expire en 24hs
    const token = jwt.sign({ id: savedUser._id }, SECRET, { expiresIn: 86400 });

    res.status(200).json({ token });
}

// signin para iniciar sesion
export const signin = async (req, res) => {

    // buscamos el usuario
    const useFound = await User.findOne({ email: req.body.email }).populate("roles"); //  populate para traer los roles

    // si no existe el usuario devolvemos un error
    if (!useFound) return res.status(401).json({ msg: 'User not found' });

    // comparePassword para comparar el password
    const matchPassword = await User.comparePassword(req.body.password, useFound.password);

    // si el password no coincide devolvemos un error
    if (!matchPassword) return res.status(401).json({ msg: 'Wrong password' });

    // creamos el token de acceso y que expire en 24hs
    const token = jwt.sign(
        {
            id: useFound._id
        },
        SECRET,
        {
            expiresIn: 86400
        })


    //console.log(useFound);

    res.status(200).json({ token });
}