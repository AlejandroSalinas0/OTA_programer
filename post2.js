const fs = require('fs');
const axios = require('axios')
const archivo='C:/Users/SF/Documents/Firmware/Smart lamp 2.1 Version 5.2.15.15.elf';
var stats='';
var trys=0;
var saved="";
var pos=0;
var chunk="";
var n=0;


exports.load = async function(Files){
    return new Promise(resolvemain => {
        async function loader(Files) {
            //console.log(`FILES: `+Files)
            if(Files!=null){
                console.log(`Archivo seleccionado ${Files}`)
            }
            else if(Files==null){
                console.log(Files)
                console.log("No new file selected, using existing")
                Files=archivo;
            }
            a = await saver(Files);
            console.log("File reading done");
            
            b = await aux();
            
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
        loader(Files); // 🤡 lurks in the shadows <-- after 1 second
    
    
    //parser(SSIDtarget, KEYtarget);
        function saver(Files) {
            stats = fs.statSync(Files)
            //datos=fs.readFile(__dirname + archivo, null, function (err,data) {     //relativo
                datos=fs.readFile(Files, null, function (err,data) {               //path absoluto
                if (err) {
                    return console.log(err);
                }
                test=data;
                if (test=="") {
                    console.log("Invalid file")
                }
                else {
                    saved=data;
                    console.log("Valid Binary")
                    console.log(Files)
                }
                
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
    
           async function aux(){
            
            
            var trys=0;
            var pos=0;
            var chunk="";
            var n=0;
            var exit=0;

            //chunk2 =saved.slice(pos, (pos + 1024));
            console.log("Sending");
          
            //while((pos  != stats.size) || exit==0){
              while(exit==0){
                console.log("===========================================================")
                chunk =saved.slice(pos, (pos + 1024));
                await axios
                .post("http://10.10.10.1/Lasec_Server/upgrade_chunk.html" + "?" + "offset=" + pos + "&" + "filesize=" + stats.size, chunk, {
                    timeout: 1000
                  })
                .then(res => {
                    console.log(`statusCode: ${res.data}`)
                    pos=res.data;
                    n=(pos)/1024;
                    console.log(`pos: ${pos}`)
                    console.log("chunk:"+n)
                    trys=0;
                    if(stats.size==pos) {
                        console.log("terminado carga de codigo")
                        exit=1;
                        console.log("===========================================================")
                    }
                    //resolveaux(1);
                })
                .catch(error => {
                    console.log("error");
                    trys++;
                    console.log(trys);
                    console.log(pos);
                    console.log(stats.size);
                    //resolveaux(1);
                    if (trys >= 15) {
                        //resolveaux(1);
                        exit=1;
                        console.log("resolving aux")
                    }
                    else if (trys < 15){
                        console.log('trying again')
                    }
                })
                
            // return new Promise(resolve => {
            //     setTimeout(() => {        
            }    //while
            if(exit=1 && pos != stats.size) {
                console.log("ERROR: Code not loaded ")
                
            }else if(pos == stats.size) {
                
                console.log("Code loaded successfully")
            }


            // return aux
            //     }, 3000);
              //});
            }
        //});
    });

}