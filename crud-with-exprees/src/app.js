import express from 'express';
const app = express();

// Definir la carpeta estática para los archivos públicos
import appConfig from './config/config.js';
app.use(appConfig)

// usando las librerias de pug
app.set('view engine', 'pug');
app.set('views', './src/views');


// Aplica el middleware cors a todas las rutas
import cors from 'cors';
app.use(cors());


// Importanto archivos  
import routerapp from './routes/index.js';
app.use('/api', routerapp);


// SI no hay variables virtuales  inicia en el localhost:3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})


