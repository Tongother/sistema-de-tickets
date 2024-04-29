import { ConfigDB } from "./ConfigDB";
export default class Connection {

  private TediousConnection = require('tedious').Connection;
  private RequestTedious = require('tedious').Request;
  private connection:any;

  constructor() {
  const config = {
    server: ConfigDB.server,
    authentication: {
      type: "default",
      options: {  
        userName: ConfigDB.user,
        password: ConfigDB.password,
      }
    },
    options: {
      encrypt: true,
      trustServerCertificate: false,
      connectionTimeout: 30,
      port: ConfigDB.port,
      database: ConfigDB.database,
    },
  };
  this.connection = new this.TediousConnection(config)
  }

  async Query(sql:any) {
    return new Promise((resolve, reject) => {
        this.connection.connect((err:any) => {
            if(err) {
                console.log('Error: ', err);
                reject(err);
            } else {
                console.log('Conexión establecida');
                this.executeStatement(sql, (data:any) => {
                    resolve(data);
                });
            }
        });
    });
}
  
  private async executeStatement(sql:any, callback: (data: any[]) => void) {
    const data:any[] = [];
    let i = 0;
    const request = new this.RequestTedious(sql, (err:any)=> {
      if(err) {
        console.log('Error: ', err); 
        this.connection.close();
      }
    })

    await request.on('row', (columns:any)=> {
      let row:any = {};
      columns.forEach((column:any) => {
        row[column.metadata.colName] = column.value;
      });
      data[i] = row;
      i++;
    });

    await request.on('requestCompleted', () => {
      callback(data);
    });

    await this.connection.execSql(request);
  }  
}