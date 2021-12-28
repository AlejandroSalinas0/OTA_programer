var cmd=require('node-cmd');

exports.reescan = async function(){
    return new Promise(resolvemain => {
        async function process(SSIDtarget, KEYtarget) {
            const a = await disabler();
            console.log("Disactivating wifi");
            const b = await enabler();
            console.log("Activating wifi");
            resolvemain('🤡');
            //console.log(`${ a } ${ b } ${ c }`);
            //console.log("payasito")
            
            //console.log("resolved")
        }
        process(); // 🤡 lurks in the shadows <-- after 1 second
    
        function disabler() {
            cmd.run(
                //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
                `netsh interface set interface name="Wi-Fi" admin=disabled`, function(err, data, stderr){
            // ``, function(err, data, stderr){
            
                console.log(data);    
        });
            return new Promise(resolved => {
                setTimeout(() => {    
                    resolved(1);
                }, 1000);
            });
        }    
        

        function enabler() { 
            console.log("Activando")
            cmd.run(
                //`netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1`, function(err, data, stderr){
                `netsh interface set interface name="Wi-Fi" admin=enabled`, function(err, data, stderr){
            // ``, function(err, data, stderr){
            
                console.log(data);    
            });
            return new Promise(resolvee => {
                setTimeout(() => {
                    
                    console.log("resolving reescan")
                    resolvee(1);
                    
                    
                }, 10000);
            });
        }
    });
}