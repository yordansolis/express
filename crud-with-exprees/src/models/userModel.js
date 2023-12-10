import mysql from 'mysql';

const CON = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactos'
})

export default CON;


