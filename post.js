const axios = require('axios')
fs = require('fs')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const splitFile = require('split-file');
const archivo=`/BaseCode.elf`;
var datos="";
//var code=0;
var num=0;
var codi=0;
var tiempo=50;
num=24;
i=1;
var saved="";
var chunk
console.log('sending:', i);
//console.log("Inicial Status =" + xhr.readyState + "  " + xhr.status);
var stats = fs.statSync(__dirname + archivo)
datos=fs.readFile(__dirname + archivo, null, function (err,data) {
if (err) {
    return console.log(err);
}
saved=data;
});
var current_pos =0;
function post() {}
console.log(saved)



  // return new Promise(resolve => {

    setTimeout(() => {
      //resolve(1);
      console.log(saved);
    }, 100);
//  });
// }
// chunk =data.slice(0, (0 + 1024));
// axios
//   .post('http://10.10.10.1/Lasec_Server/upgrade_chunk.html?offset=3072&filesize=312392', chunk)
//   .then(res => {
//     console.log(`statusCode: ${res.data}`)
//     //console.log(`statusCode: ${res.data}`)
//     //console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })
// }
// );


// n = 0;
// x = 0;
// while (n < 3) {
//   n ++;
//   x += n;
//   console.log(n)
// }



//var upgrade_chunk_url_with_query = "http://10.10.10.1/Lasec_Server/upgrade_chunk.html" + "?" + "offset=" + (1024*(i-1)) + "&" + "filesize=" + stats.size;
//xhr.open('POST', upgrade_chunk_url_with_query, true);