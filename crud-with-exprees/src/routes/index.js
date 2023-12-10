import express from 'express';
const router = express.Router();

// para recibir datos  desde un formulario
import bodyParse from 'body-parser';
router.use(bodyParse.urlencoded({ extended: true }));


//Importamos la db
import CON from '../models/userModel.js';



/**
 * 
 * ! SOLICITUD - GET
 */

router.get('/users', (req, res) => {

  let sql = `select * from contact_user`;
  CON.query(sql, (err, result) => {
    if (err) {
      console.log('Erorro controlado del sistema. ' + err);
    }
    res.render('../views/crud/index', {
      users: result
    })

  })
})


// Ruta GET para agregar un nuevo usuario
router.get('/add', (req, res) => {
  const title = 'Add user';

  res.render('../views/crud/add', {
    title
  })
})






/**
 * @param    Manejador de router con Middwere
 * ! Solicitudes POST 
 */

router.post('/users', (req, res) => {

  let { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      msg_err: 'Todos los campos son obligatorios'
    })
  }

  //opción mas segura
  const sql = `INSERT INTO contact_user(name, email, phone)VALUES(?)`;

  let datos = [name, email, phone];

  CON.query(sql, [datos], (err, result) => {
    if (err) {
      return console.log('Erorro controlado del sistema. ' + err);
    }
  })
  res.redirect('/api/users');
});



// Ruta DELETE para eliminar un usuario
router.delete('/user/:id', async (req, res) => {
  if (req.params.id) {
    CON.query(`DELETE FROM contact_user WHERE id_user = ${req.params.id}`, (err, result) => {

      if (err) {
        res.status(500).json({
          success: false,
          error: 'Error al eliminar el contacto'
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'Contactos eliminado con exito '
        })
      }
    })
  } else {
    res.status(500).json({
      success: false,
      error: 'ID de usuario no proporcionado'
    });
  }

});


export default router;