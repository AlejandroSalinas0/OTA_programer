const fs = require('fs');
const axios = require('axios')
const archivo=`/SL46.elf`;
var stats='';
var trys=0;
var saved="";
var pos=0;
var chunk="";
var n=0;
var datos="prueba";
const numero=3;

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "172.168.100.106",
  user: "root",
  password: "lasecsf",
  database: "smartflowdb"   
});

exports.mysqlserver = async function(){
    return new Promise(resolvemain => {
        async function loader() {
            a = await saver();
            console.log("terminado lectura");
            
            //b = await aux();
            
            console.log("terminado post");
            //c = await fetch();
            //console.log("iniciando fetch");
            // c = await importer();
            // console.log("terminado importer");
            // d = await connecter();
            // console.log("terminado conecter");
            //console.log(`${ a } ${ b } ${ c }`);
            resolvemain('🤡');
        }
        loader(); // 🤡 lurks in the shadows <-- after 1 second
    
    
    //parser(SSIDtarget, KEYtarget);
        function saver() {
            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");      
                var sql = `INSERT INTO info (ID, MAC, MACBT, SN, IP, Operacion, Control, Log, Completed, Mina, Fecha) VALUES (${numero}, "${datos}", "MACBT", "SN", "IP", 3, "Control", "Log", "Completed", "Mina", "1134-02-18 1:45:21")`;  
                console.log(sql);
                // var VALUES = [  
                //     req.body.id,
                //     found.MAC,
                //     req.body.sn, 
                //     found.IP,
                //     found.Operacion,
                //     found.Control,
                //     req.body.log,
                //     false,
                //     datamina[0].MinaActual,
                //     time.tiempohumano()
                //     ];   
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
              });
        return new Promise(resolve => {
            setTimeout(() => {    
                resolve(1);
                
                //chunk2 =saved.slice(pos, (pos + 1024));
                //console.log(stats.size)
            }, 3000);
        });
        }    
    
        // async function post(){
        //     const a= await aux();
        //     return new Promise(resolve =>{
        //     resolve(1);
        //     });
        //     }
        //} 
    });

}