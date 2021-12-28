const fs = require('fs');
var cmd=require('node-cmd');
const { connect } = require('http2');
const path = require('path');
const filePath =path.join(__dirname, './NewProfile.xml')
var SSIDtarget="RED CONOCIDA";
var KEYtarget="KEY CONOCIDA";
var xml=""

async function msg(SSIDtarget, KEYtarget) {
    const a = await parser(SSIDtarget, KEYtarget);
    console.log("terminado parcer");
    const b = await saver(xml, filePath);
    console.log("terminado saver");
    const c = await importer();
    console.log("terminado importer");
    const d = await connecter();
    console.log("terminado conecter");
    //console.log(`${ a } ${ b } ${ c }`);

  }
  
  msg(SSIDtarget, KEYtarget, xml); // 🤡 lurks in the shadows <-- after 1 second


//parser(SSIDtarget, KEYtarget);

function parser(SSIDtarget, KEYtarget) {
    return new Promise(resolve => {
        setTimeout(() => {
   
xml=`<?xml version="1.0"?>
<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
	<name>${SSIDtarget}</name>
	<SSIDConfig>
		<SSID>
			<hex>4C61736563</hex>
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
    resolve('🤡');
    //console.log(xml)
       }, 5000);
    });
  }
//saver();
function saver(xml, filePath){
    return new Promise(resolve => {
        setTimeout(() => {
//client.emit('data', database);
//console.log('guardando en: '+filePath)
//const stringifyData = JSON.stringify(xml, null, 2)
fs.writeFileSync(filePath, xml)
resolve('🤡');
}, 3000);
//console.log(xml)
});
}

function importer(xml, filePath){
    return new Promise(resolve => {
        setTimeout(() => {
        cmd.run(
            //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
            `netsh wlan add profile NewProfile.xml`, function(err, data, stderr){
           // ``, function(err, data, stderr){
        
            console.log(data);    
    });
    resolve('🤡');
       }, 3000);
        
    //    resolve('🤡');
});
}

function connecter(xml, filePath){
    return new Promise(resolve => {
        setTimeout(() => {
        cmd.run(

            //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
            `netsh wlan connect name="RED CONOCIDA"`, function(err, data, stderr){
           // ``, function(err, data, stderr){
        
            console.log(data);    
    });
    resolve('🤡');
             }, 3000);
    //    resolve('🤡');
});
}


