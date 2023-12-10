import app from './app.js';
import './db.js';

const PORT = 4000; // Cambiar el número de puerto

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });