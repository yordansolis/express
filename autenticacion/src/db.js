import mongoose from 'mongoose';
const uri = 'mongodb://127.0.0.1:27017/employees'; // Reemplaza // Configuración de conexión a MongoDB
const options = {
  // useNewUrlParser y useUnifiedTopology son opciones obsoletas en versiones recientes de Mongoose y no son necesarias desde la versión 4.0.0 del controlador de Node.js
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

mongoose.connect(uri, options)
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    // Aquí podrías empezar a realizar operaciones con tu base de datos
  })

  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });