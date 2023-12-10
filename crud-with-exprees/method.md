


/**
 * ! Integrando MYSQL
 ** npm install mysql
 ** npm install pug
 */


// usando render  con valores
// app.get('/put', function (req, res) {

//     const user = {
//         name: 'Jordan',
//         email: 'jordan@jordan',
//         age: 30
//     }


//     const frutas = ['pera', 'manzana', 'sandia']

//     res.render('index', {
//         title: 'Crud con express',
//         message: 'Crud con express y pug',
//         user,
//         frutas
//     });
// });




/** Solicitudes GET */
// app.get('/', (req, res) => {
//     res.send({
//         msg: 'Bienvenido - Backend con JS & Express  ss2'
//     })
// });

// app.get('/about', function (req, res) {
//     res.send('about');
// });

// app.get('/contact/jordan', function (req, res) {
//     res.send('contact jordan');
// })

// app.get('/contact/b', function (req, res, next) {
//     console.log('la respuesta a la función...');
//     next();
// }, function (req, res) {
//     res.send('contact b');
// });

// app.get('/contact/:id', function (req, res) {
//     console.log(req.params);
//     res.send('contact ' + req.params.id);
// })

// app.get('/user/:id/:age', (req, res) => {
//     console.log(req.params);
//     return res.json('Usuario:  ' + req.params.id + ' Edad ' + req.params.age);

// })



# update  || PUT


// /**
//  * 
//  * ! SOLICITUD - GET  ID
//  */

// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id);
//     if (req.params.id) {

//         let number = req.params.id;

//         if (isNaN(number)) {
//             return res.status(400).json(
//                 { msg_err: 'El id debe ser numerico' }
//             )
//         }

//         let sql = `select * from contact_user where id_user = ${req.params.id}`;

//         CON.query(sql, (err, result) => {
//             if (err) {
//                 console.log('Erorro controlado del sistema. ' + err);
//             }

//             if (result.length > 0) {
//                 res.json({
//                     user: result
//                 })
//             } else {
//                 res.status(400).json({
//                     msg_err: 'El usuario no existe'
//                 })
//             }
//         })



//     }
// })


// MULTIPLES QUERY   
// esto es bueno usarlo con db relacional
// app.get('/user/:id/:age', function (req, res) {
//     console.log(req.params);
//     res.send('User ' + req.params.id + ' is ' + req.params.age);
// })


# Ejemplo usando funciones asyn
<!DOCTYPE html>

<head>
    <title>Document</title>
</head>

<body>
    <script>
        // Función que toma un número y una función de callback
        function operacionAsincrona(num, callback) {
            // Simulación de operación asincrónica que tarda un segundo
            setTimeout(function () {
                const resultado = num * 2;
                // Llamar a la función de callback y pasar el resultado
                callback(resultado);
            }, 1000);
        }

        // Función de callback que muestra el resultado
        function mostrarResultado(resultado) {
            console.log("El resultado es:", resultado);
        }

        // Llamar a la función operacionAsincrona con el número y la función de callback
        operacionAsincrona(5, mostrarResultado);

    </script>
</body>

</html>