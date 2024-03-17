import Image from "next/image";

export default function Home() {
  
  var Connection = require('tedious').Connection;


  var config = {
    server: "ROGSTRIX\\SQLEXPRESS", // or "localhost"
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

  // Setup event handler when the connection is established. 
  connection.on('connect', (err:any)=> {
    if(err) {
      console.log('Error: ', err);
    }else {
      executeStatement();
    }
    // If no error, then good to go...
  });

  function executeStatement() {
    console.log("base de datos conectada");
  }

  return (
    <main className="text-[#C73CE6]">
      <h1 className="m-[70px] text-[#4EE63C]">Hola main</h1>
    </main>
  );
}
