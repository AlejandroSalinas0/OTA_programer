var cmd=require('node-cmd');
var coincidences=[];
var profile =require('./profile');
var reescan = require('./reescan');
var load = require('./post2');
var express = require("express"), app = express();
var activacion=0;
var temporalblacklist=[];
var whitelist=[];
var Files=null;

main();

function search() {
    return new Promise(resolvesearch => {
        cmd.run(`netsh wlan show networks`, function(err, data, stderr){
            //console.log('Windows dice: ', data)
            if(data=="  There is no wireless interface on the system.")
            {
              console.log("Wireless interface not available")
              //coincidences=[];
              //cmd.run(`netsh interface set interface name="Wi-Fi" admin=enabled`)
              resolvesearch('Interface not available 🤡');
              

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
                      resolvesearch('Scan finished');
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
    // const PE = await reescan.reescan();
    // console.log('Searching')
    // const PA = await search();
    // //console.log(PA)
    // console.log("Process A finished");
    // //const PB = await profile();
    // //console.log(`${ PA }\r\n ${ PB }\r\n ${ PC }\r\n`);
    // if(coincidences.length!=0) {
        const PB = await profile.profile("Prueba nueva");
    // }
    // await espera()

   }
 }
//main();
 function espera() {
  return new Promise(resolveespera => {
    setTimeout(() => {    
      resolveespera(1);
  }, 10000);
  });
}