import mongoose, {Schema, model, mongo} from 'mongoose';
import bcrypt from 'bcrypt';

const productSchema = new Schema(
    {

    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        unique: true,
        required: true

    },

    roles:[
        {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        //un usuario puede tener varios roles
    }
],
},{
    timestamps: true,
    versionKey: false
}

)


// Cifrar y comprar las contraseñas 

// para guardar el password encriptado
productSchema.statics.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };


  
// para comprobar si es correcta
productSchema.statics.comparePassword = async function (password, receivedPassword) {
    return await bcrypt.compare(password, receivedPassword);
  };


  
  export default mongoose.model('User', productSchema);