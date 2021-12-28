fs = require('fs')
var cmd=require('node-cmd');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const splitFile = require('split-file');
const archivo=`/172-168-100-122.elf`;
var datos="";
//var code=0;
var num=0;
var codi=0;
var tiempo=50;
var name='"LASEC SF:23:23"';
//cmd.run(`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
cmd.run(`netsh wlan connect name=${name} ssid=${name}`, function(err, data, stderr){
    console.log('Windows dice: ',data)
}),
sender2();
function sender2() {
    setTimeout(() => {
        sender(1);  
    }, 5000)
//codi=17;
return codi;
}


function sender(i, code) {
    //codi=10;
    
    if(codi==104){
        tiempo=100;
    } else if(codi==105){
        tiempo=7000;
    }
    //tiempo=10;
    console.log("---------------------code: "+codi+"--------------------------")
    setTimeout(() => {
        //if(i==1){
        //codi=106;
        xhr = new XMLHttpRequest();
        //}
        num=24;
        console.log('sending:', i);
        console.log("Inicial Status =" + xhr.readyState + "  " + xhr.status);
        var stats = fs.statSync(__dirname + archivo)
        datos=fs.readFile(__dirname + archivo, null, function (err,data) {
        if (err) {
            return console.log(err);
        }
        
        var upgrade_chunk_url_with_query = "http://10.10.10.1/Lasec_Server/upgrade_chunk.html" + "?" + "offset=" + (1024*(i-1)) + "&" + "filesize=" + stats.size;
        xhr.open('POST', upgrade_chunk_url_with_query, true);
    
        var current_pos =1024*(i-1);
        var chunk =data.slice(current_pos, (current_pos + 1024));
         if (data){
        console.log(upgrade_chunk_url_with_query);
        console.log("Prefligt Status =" + xhr.readyState + "  " + xhr.status + " datasize " + stats.size + "chunk size: "+ chunk.length);
        }
        xhr.send(chunk);
        console.log("Postsend Status =" + xhr.readyState + "  " + xhr.status);
        //if((current_pos+1024)>=3000/*stats.size*/){
        if((current_pos+1024)>=stats.size){    
            console.log("Terminado")
            codi=105;


            cmd.run(
                `netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
                    console.log('Windows dice: ',data)
                })
            tiempo=7000;
            sender(1)
            //process.exit(codi);

        }
        else{
            console.log(current_pos+1024)    
            codi=104;
            sender(++i);
            //tiempo=1000;
        }
        //datos=data;
        //return data;
        });
        //current_pos = parseInt(xhr.response);      
        //console.log(xhr);

    }, tiempo)
//codi=17;
return codi;
}
//sender(1);
//console.log("codi: "+codi)
//console.log(datos)
// process.on('exit', function(){
//     //console.log(codi)
//     //return console.log(`Terminando proceso ${codi}`);
    
// })
//return codi;
