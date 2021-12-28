var cmd=require('node-cmd');
var coincidences=[];
var profile =require('./profile');
var reescan = require('./reescan');
var load = require('./post2');
var express = require("express"), app = express();
var activacion=0;
var temporalblacklist=[];
var whitelist=[];
bodyParser = require("body-parser");
var Files=null;
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
    return new Promise(resolve => {
        cmd.run(`netsh wlan show networks`, function(err, data, stderr){
            //console.log('Windows dice: ', data)
            if(data=="  There is no wireless interface on the system.")
            {
              console.log("Wireless interface not available")
              //coincidences=[];
              //cmd.run(`netsh interface set interface name="Wi-Fi" admin=enabled`)
              resolve('Interface not available 🤡');
              

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
                  let chunks=element.split('Network');    //added
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
                      if(n = SSID.includes("LASEC VEHICLE SF:")){
                      console.log("Identified target: "+SSID)
                      coincidences.push(SSID);
                      }else{
                      //console.log("SSID: "+SSID)
                      }
                  } 
                  //console.log(`COINCIDENCES: ${coincidences}`)
                  if(counter==slice.length){
                      console.log("Network count:")
                      resolve('Scan finished');
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
    const PE = await reescan.reescan();
    console.log('Searching')
    const PA = await search()[0];
    //console.log(PA)
    console.log("Process A finished");
    //const PB = await profile();
    var coincidences = coincidences.filter(x => !whitelist.includes(x));
    if(coincidences.length!=0) {
      const PB = await profile.profile(coincidences[0]);
      whitelist.push(coincidences[0]);
      console.log(`whitelist process ${whitelist}`)
      console.log("Process B finished");
      const PC = await load.load(Files)[0];
      console.log(PC)
      console.log("Process C finished");
      
      const PD = await reescan.reescan();
      console.log("Re-scaning")
    //}else{ 
    }else if(coincidences.length==0) {
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
//main();
 function espera() {
  return new Promise(resolve => {
    setTimeout(() => {    
      resolve(1);
  }, 10000);
  });
}