var cmd=require('node-cmd');
var coincidences=[];
var profile =require('./profile');
var reescan = require('./reescan');
var load = require('./post2');

function search() {
    return new Promise(resolve => {
        cmd.run(`netsh wlan show networks`, function(err, data, stderr){
            //console.log('Windows dice: ', data)
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
               
                
                //console.log("Counter"+counter)
                //splits=chunks.split('.');
                if(SSID.length<1){
                    console.log("SSID oculto Descartando")
                }else{
                    if(n = SSID.includes("LASEC SF:")){
                    console.log("Target identificado: "+SSID)
                    coincidences.push(SSID);
                    }else{
                    //console.log("SSID: "+SSID)
                    }
                } 
                if(counter==slice.length){
                    console.log("network count")
                    resolve('Scaneo terminado');
                    console.log(coincidences.length);
                }else{
                    //console.log("CO:"+counter+"SD:"+slice.length)
                }
                });
                //console.log("Lamparas AP disponibles: "+array)
                //return array;
                //no
            }
        //return array;
        //return array;
        );
      //no
    });
  }
  
  // function profile() {
  //   return new Promise(resolve => {
  //     //setTimeout(() => {
  //       resolve('lurks');
  //       //console.log('5')
  //       //console.log(coincidences)
  //       cmd.run(`netsh wlan export profile name="LASEC" key=clear`, function(err, data, stderr){ 
  //           console.log(data)
  //       });
        
        
  //     //}, 1000);
  //   });
  // }
  
  // function load() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('in the shadows');
  //       console.log('24')
  //     }, 1000);
  //   });
  // }

  function reescan() {



    return new Promise(resolve => {

      setTimeout(() => {
        resolve(1);
        console.log(Rescan);
      }, 1000);
    });
  }
  
  async function main() {
    while(true) {
    const PE = await reescan.reescan();
    const PA = await search();
    //console.log(coincidences)
    console.log("terminado proceso A (busqueda)");
    //const PB = await profile();
    if(coincidences.length!=0) {
      console.log("mas de uno");
      const PB = await profile.profile(coincidences[0]);
      console.log("terminado proceso B");
      const PC = await load.load();
      console.log("terminado proceso C");
      
      const PD = await reescan.reescan();
      console.log("rescaneando")
    }else{
      console.log("rescaneando ninguna encontrada")
      const PD = await reescan.reescan();
    }
    
    
    
    //console.log(`${ PA }\r\n ${ PB }\r\n ${ PC }\r\n`);

  }
}
  main(); // 🤡 lurks in the shadows <-- after 1 second


