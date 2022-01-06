// var mysqlserver = require('./mysqlserver');
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "10.10.20.113",
//   user: "root",
//   password: "lasecsf",
//   database: "smartflowdb"   
// });
//var difference = arr1.filter(x => !arr2.includes(x));
    //const PB = await profile();
    // if(coincidences.length!=0) {
    //   console.log("mas de uno");
    //   const PB = await profile.profile(coincidences[0]);
    //   console.log("terminado proceso B");
    //   const PC = await load.load();
    //   console.log("terminado proceso C");
    // }else{
    //   console.log("rescaneando")
    //   const PD = await reescan.reescan();
    // }

// const { sustractor } = require("./sustract");

// //}
// var result=sustractor();
// console.log(result);


// const fs = require('fs');
// const axios = require('axios')
// var cmd=require('node-cmd');
// const { connect } = require('http2');
// const path = require('path');
// const splitFile = require('split-file');
// const archivo=`/BaseCode.elf`;
// //var datos="";
// //var code=0;
// var num=0;
// var codi=0;
// var tiempo=50;
// var stats='';
// var trys=0;

// const filePath =path.join(__dirname, './NewProfile2.xml')
// //var SSIDtarget="RED CONOCIDA";
// var KEYtarget="Lasec123.";
// var xml="";
// var saved="";
// var pos=0;
// var chunk="";0;
// var n=0;
// // var hexd="";
// stats = fs.statSync(__dirname + archivo)
//             datos=fs.readFile(__dirname + archivo, null, function (err,data) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 saved=data;
//                 });
// //exports.load = async function(){
//     //return new Promise(resolvemain => {
//         // async function loader() {
//         //     a = await saver();
//         //     console.log("terminado lectura");
            
//         //     b = await post();
            
//         //     console.log("terminado post");
//             //c = await fetch();
//             //console.log("iniciando fetch");
//             // c = await importer();
//             // console.log("terminado importer");
//             // d = await connecter();
//             // console.log("terminado conecter");
//             //console.log(`${ a } ${ b } ${ c }`);
//             //resolve('🤡');
//         // }
//         // loader(); // 🤡 lurks in the shadows <-- after 1 second
    
    
//     //parser(SSIDtarget, KEYtarget);
//         // function saver() {
//         //     stats = fs.statSync(__dirname + archivo)
//         //     datos=fs.readFile(__dirname + archivo, null, function (err,data) {
//         //         if (err) {
//         //             return console.log(err);
//         //         }
//         //         saved=data;
//         //         });
//         // return new Promise(resolve => {
//         //     setTimeout(() => {    
//         //         resolve(1);
//         //     }, 3000);
//         // });
//         // }    
    
//         // async function post(){
//         //     a= await aux();
            
//         //     return new Promise(resolve =>{
//         //     resolve(1);
//         //     });
//          //   }
//         //} 

//             aux();
//             async function aux(){
//             while(pos  <= stats.size){
//                 console.log("===========================================================")
//                 chunk =saved.slice(pos, (pos + 1024));
//                 await axios
//                 .post("http://10.10.10.1/Lasec_Server/upgrade_chunk.html" + "?" + "offset=" + pos + "&" + "filesize=" + stats.size, chunk)
//                 .then(res => {
//                     console.log(`statusCode: ${res.data}`)
//                     pos=res.data;
//                     n=(pos+1024)/1024;
//                     console.log(`pos: ${pos}`)
//                     console.log("chunk:"+n)
//                     trys=0;
//                     //resolveaux(1);
//                 })
//                 .catch(error => {
//                     console.log("error");
//                     trys++;
//                     console.log(trys);
//                     //resolveaux(1);
//                 })
                
//             // return new Promise(resolve => {
//             //     setTimeout(() => {    
//             if(n>306){
//             console.log("Terminado")
//             //resolvemain(1);
//             }       
//             }    //while
//                 // return aux
//             //     }, 3000);
//             // });
//             }
//     //});
// //}
// var cmd=require('node-cmd');
// cmd.run(`netsh wlan show networks`, function(err, data, stderr){
//     //console.log('Windows dice: ', data)
//     if(data.includes('There is no wireless interface on the system'))
//     {
//       console.log("Wireless interface not available")
//       console.log(`data 1 ${data}`);
//       console.log(`stderr ${err}`);
//       //console.log(err)


//     }else{  
//         console.log(`data 2 ${data}end`);
//         console.log(`stderr ${err}`);
//       //console.log(err)
//       //coincidences=[];
//       //cmd.run(`netsh interface set interface name="Wi-Fi" admin=enabled`)
//       //('Interface not available 🤡');
      

//     }

// });


var cmd=require('node-cmd');

//Windows multiline commands are not guaranteed to work try condensing to a single line.
    
    //const syncDir=cmd.runSync('netsh interface set interface Wi-Fi admin=enabled');
    const syncDir=cmd.runSync('ping 10.86.10.1');

    console.log(`
    
        Sync Err ${syncDir.err}
        
        Sync stderr:  ${syncDir.stderr}

        Sync Data ${syncDir.data}
    
    `);

    cmd.run(`netsh wlan show networks`,
        function(err, data, stderr){
            console.log("ACTIVADO" ,data)
        }
    );