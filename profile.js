const fs = require('fs');
var cmd=require('node-cmd');
const { connect } = require('http2');
const path = require('path');
const filePath =path.join(__dirname, './NewProfile.xml')
//var SSIDtarget="RED CONOCIDA";
var KEYtarget="Lasec123.";
var xml=""
var a=0;
var b=0;
var c=0;
var d=0;
var hexd="";

exports.profile = async function(SSIDtarget){
    return new Promise(resolvemain => {
        async function msg(SSIDtarget, KEYtarget) {
            console.log("comenzando profile");

            //console.log(coincidences);
            z = await hexconverter(SSIDtarget);
            console.log("terminado hex");
            a = await parser(SSIDtarget, KEYtarget, hexd);
            console.log("terminado parcer");
            b = await saver(xml, filePath);
            console.log("terminado saver");
            c = await importer();
            console.log("terminado importer");
            d = await connecter();
            console.log("terminado conecter");
            //console.log(`${ a } ${ b } ${ c }`);
            //resolve('🤡');
        }
        msg(SSIDtarget, KEYtarget, xml); // 🤡 lurks in the shadows <-- after 1 second
    
    
    //parser(SSIDtarget, KEYtarget);
        function hexconverter(str) {
                var arr1 = [];
                for (var n = 0, l = str.length; n < l; n ++) 
                {
                    var hex = Number(str.charCodeAt(n)).toString(16);
                    arr1.push(hex);
                }
                var hexc=arr1.join('')
                //var hexe=`${hexc}`
                hexd = hexc.toUpperCase();
                //console.log("asci")
                //console.log(hexd);
        return new Promise(resolve => {
            setTimeout(() => {    
                resolve(1);
            }, 1000);
        });
        }    
        

        function parser(SSIDtarget, KEYtarget, hexd) {
         
            console.log(SSIDtarget + KEYtarget)
            xml=`<?xml version="1.0"?>
            <WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
                <name>${SSIDtarget}</name>
                <SSIDConfig>
                    <SSID>
                        <hex>${hexd}</hex>
                        <name>${SSIDtarget}</name>
                    </SSID>
                </SSIDConfig>
                <connectionType>ESS</connectionType>
                <connectionMode>manual</connectionMode>
                <MSM>
                    <security>
                        <authEncryption>
                            <authentication>WPA2PSK</authentication>
                            <encryption>AES</encryption>
                            <useOneX>false</useOneX>
                        </authEncryption>
                        <sharedKey>
                            <keyType>passPhrase</keyType>
                            <protected>false</protected>
                            <keyMaterial>${KEYtarget}</keyMaterial>
                        </sharedKey>
                    </security>
                </MSM>
                <MacRandomization xmlns="http://www.microsoft.com/networking/WLAN/profile/v3">
                    <enableRandomization>false</enableRandomization>
                    <randomizationSeed>1385304129</randomizationSeed>
                </MacRandomization>
            </WLANProfile>`       
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        });
        }

        function saver(xml, filePath){
            fs.writeFileSync(filePath, xml)
            console.log(`SAVER ${filePath}`);
        return new Promise(resolve => {
            setTimeout(() => {    
                resolve(1);
            }, 1000);
        });
        }
    
        function importer(){
            //console.log(filePath);
            cmd.run(
                            //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
                            //`netsh wlan add profile NewProfile.xml`, function(err, data, stderr){
                                `netsh wlan add profile NewProfile.xml interface="Wi-Fi"`, function(err, data, stderr){                  
                            // ``, function(err, data, stderr){
                        
                            console.log(`IMPORTER ${data}`);    
                    });
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 2000);
        });
        }

        function connecter(xml, filePath){
            cmd.run(
                //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
                `netsh wlan connect name="${SSIDtarget}"`, function(err, data, stderr){
            // ``, function(err, data, stderr){            
                console.log(`CONECTER ${data}`);    
            });
            //console.log("AAAAAAAAAAAAAAAAAAAA")
        return new Promise (resolve => {
                setTimeout(() => {
            
                resolve(1);
                resolvemain(1);
            }, 2000);
        });
        }
    })
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