const fs = require('fs');
var cmd=require('node-cmd');
const { connect } = require('http2');
const path = require('path');
const filePath =path.join(__dirname, './NewProfile2.xml')
//var SSIDtarget="RED CONOCIDA";
var KEYtarget="Lasec123.";
var xml=""
var a=0;
var b=0;
var c=0;
var d=0;
var hexd="";

exports.Loader = async function(SSIDtarget){
    return new Promise(resolvemain => {
        async function msg(SSIDtarget, KEYtarget) {

        }
        msg(SSIDtarget, KEYtarget, xml); // 🤡 lurks in the shadows <-- after 1 second
    
    
    //parser(SSIDtarget, KEYtarget);
        


    });
}


function ascii_to_hex(str)
{
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++) 
    {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}