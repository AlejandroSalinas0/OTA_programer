var cmd=require('node-cmd');
var array=[];
search();

function search() {
    return new Promise(resolve => {
      setTimeout(() => {
        cmd.run(
        //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
        `netsh wlan show networks`, function(err, data, stderr){
            //console.log('Windows dice: ', data)
            var split = data.split("SSID");
            var slice = split.slice(1, split.length);
            //console.log(slice);
            var counter = 0;
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
                    array.push(SSID);
                    console.log(array.length)
                    }else{
                    //console.log("SSID: "+SSID)
                    }
                }
                });
                //console.log("Lamparas AP disponibles: "+array)
                //return array;
            }
        //return array;
        //return array;
        );
        //console.log(array)
        resolve('in the shadows');
        console.log('Busqueda finalizada')
      }, 1000);
    });
  }