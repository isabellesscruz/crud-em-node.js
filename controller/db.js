require('dotenv').config()

let mysq = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.SENHA,
  database : 'bd_faculdade'
});
 
connection.connect();
 
module.exports = connection;