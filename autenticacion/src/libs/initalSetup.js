// aqui creamos los roles basicos
import Role from '../models/Role';

export const createRol = async () => {

    try {
        // creamos los roles si existe
        const count = await Role.estimatedDocumentCount()

        // si ya existen no hay que crearlos
        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save(),
        ])        
        //console.log(values);
    } catch (error) {
        console.log(error);
    }


}

createRol();