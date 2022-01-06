var cmd=require('node-cmd');
var coincidences=[];
var profile =require('./profile');
var reescan = require('./reescan');
var load = require('./post2');
var express = require("express"), app = express();
var activacion=1;
var temporalblacklist=[];
var whitelist=[];
bodyParser = require("body-parser");
var Files=null;
var restantes=[];
//methodOverride = require("method-override");
//mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
//pp.use(bodyParser.json());

var route = express.Router();
app.use(route);

app.listen(3000, function () {
  console.log("Waiting autorization");
});

route.get('/on', (req, res) => {
  res.status(200).send('El actualizador OTA se ha activado exitosamente');
  activacion=1;
  console.log("Autorization acepted");
  main();
  //console.log(req.body);
});

route.get('/off', (req, res) => {
  res.status(200).send('El actualizador OTA se ha desactivado exitosamente');
  activacion=0;
  whitelist=[];
  //console.log(req.body);
});

route.post('/examinar', (req, res) => {
  res.status(200).send('Archivo seleccionado correctamente el back');
  activacion=0;
  console.log("Archivo seleccionado");
  Files=req.body.name
  console.log(req.body.name);
});

route.post('/archivo', (req, res) => {
  res.status(200).send('Envio exitoso');
  activacion=0;
  console.log("Update file received");
  console.log(req.body.sendName);
  Files=req.body.sendName
});



function search() {
    return new Promise(resolvesearch => {
        cmd.run(`netsh wlan show networks`, function(err, data, stderr){
            //console.log('Windows dice: ', data)
            if(data.includes("There is no wireless interface on the system"))
            {
              console.log("ERROR: " + 404 +"\r\n"+"INFO:No se puedo encontrar redes porque la interfaz aun no se ha activado, necesita mas tiempo")
              //coincidences=[];
              //cmd.run(`netsh interface set interface name="Wi-Fi" admin=enabled`)
              resolvesearch(404);
              

            }
            else{
              var split = data.split("SSID");
              var slice = split.slice(1, split.length);
              //console.log(slice);
              var counter = 0;
              coincidences = [];
              //var array=[]
              slice.forEach(element => {
                  counter += 1; 
                  //console.log("Current: "+element);
                  let chunks=element.split('Tipo');    //added
                  SSIDdirty=chunks[0];
                  //console.log("starting")
                  if(counter<10){
                  SSID=SSIDdirty.slice(5, [SSIDdirty.length-6])
                  //console.log("if")
                  }else{
                  //console.log("else")
                  SSID=SSIDdirty.slice(6, [SSIDdirty.length-6])
                  }
                
                  
                  //console.log("Counter"+counter
                  //console.log()
                  //splits=chunks.split('.');
                  if(SSID.length<1){
                      console.log("Hidden SSID")
                  }else{
                      if(n = SSID.includes("LASEC SF:")){
                      console.log("Identified target: "+SSID)
                      coincidences.push(SSID);
                      }else{
                      //console.log("SSID: "+SSID)
                      }
                  } 
                  //console.log(`COINCIDENCES: ${coincidences}`)
                  if(counter==slice.length){
                      console.log("Network count:")
                      resolvesearch(100);
                      console.log(coincidences.length);
                  }else{
                      //console.log("CO:"+counter+"SD:"+slice.length)
                  }
                  });
                  //console.log("Lamparas AP disponibles: "+array)
                  //return array;
                  //no
              }
            }
        //return array;
        //return array;
        );
      //no
    });
  }
  
  async function main() {
    while(true) {
    if(activacion==1){
    console.log(`Whitelist process: ${whitelist}`)
    //const PE = await reescan.reescan();
    console.log('Searching')
    const PA = await search();
    console.log(`Searching code ${PA}`);
    console.log("Process A finished");
    //const PB = await profile();
    
    if(coincidences.length!=0 && activacion==1) {
      restantes = coincidences.filter(x => !whitelist.includes(x));
      if (restantes.length!=0){
        const PB = await profile.profile(restantes[0]);
        console.log(`Añadiendo a whitelist ${restantes[0]}`)
        whitelist.push(restantes[0]);
        console.log("Process B finished");
        const PC = await load.load(Files);
        console.log("Process C finished");
        
        //const PD = await reescan.reescan();
        //console.log("Re-scaning")
        
      }else{
        console.log("Ninguna restante---------------------------------------------------------------------------------\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n")
        console.log(restantes.length)
        const PD = await reescan.reescan();
      }
     
    //}else{ 
    }else if(coincidences.length==0 && activacion==1) {
      console.log("No network found")
      const PD = await reescan.reescan();
    }
    console.log(`All process finished \r\n`)
  }else if(activacion==0){   
    console.log("Holding>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    const PF = await espera();
  }
  
    
    //console.log(`${ PA }\r\n ${ PB }\r\n ${ PC }\r\n`);

   }
 }
main();
 function espera() {
  return new Promise(resolveespera => {
    setTimeout(() => {    
      resolveespera(1);
  }, 5000);
  });
}