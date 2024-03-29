export default function Connection() {

var Connection = require('tedious').Connection;
const Request = require('tedious').Request;


  var config = {
    server: "ROGSTRIX\\SQLEXPRESS", // o "localhost"
    authentication: {
      type: "default",
      options: {  
        userName: "ejemplo",
        password: "ejemplo123@123",
      }
    },
    options: {
      encrypt: false,
      TrustServerCertificate: true,
      port: 1433,
      database: "ticketSystem",
    },
  };

  var connection = new Connection(config);

  connection.connect();

  // Aquí se establece el manejador de eventos cuando se establece la conexión.
  connection.on('connect', (err:any)=> {
    if(err) {
      console.log('Error: ', err);
    }else {
      executeStatement();
    }
    // Si no hay error, prosigue con la instrucción
  });

  function executeStatement() {
    const request = new Request("INSERT INTO clientes (nombre, apellido, correo, contraseña) VALUES('Ossiris', 'Perez', 'Ossi@outlook.com', 'guntherMiNovio')", (err:any, rowCount:any)=> {
      if(err) {
        console.log('Error: ', err);
      }
      connection.close();
    });

    request.on('row', (columns:any)=> {
      
    });

    connection.execSql(request);
  }
}