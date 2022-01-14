// var net = require('net');

// var client = new net.Socket();
// client.connect(8010, 'localhost', function() {
// 	console.log('Connected');
// 	//client.write('Hello, server! Love, Client.');
// });

// client.on('data', function(data) {
// 	console.log(`---------------------------------------------------------------------${data}-----------------------------------------------------------------------------------------`);
//     //process.stdout.write(data);
//     //console.log(JSON.stringify(data));
//     //str
//     //console.log(data.replace(/\n/, `\\n`));
// 	//client.destroy(); // kill client after server's response
// });

// client.on('close', function() {
// 	console.log('Connection closed');
// });
const net = require('net');
const port = 3011;
const host = '172.168.100.134';

const server = net.createServer();
server.listen(port, host, () => {
    console.log('TCP Server is running on port ' + port + '.');
});

let sockets = [];


server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);
    main();

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to all the connected, the client will receive it as data from the server
        sockets.forEach(function(sock, index, array) {
            sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
        });
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

	sock.on('error', function(data) {
        console.log(data);
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED BY SERVER---------------------------------------------------------: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

function main(){
    setTimeout(() => {  
        if (sockets!=0) {
        sock.write("ACK\r\nACK\r\nP1\r\n");
        console.log(sockets.length + " ESTADO NORMAL");
        }
        main();
        
    }, 4000);
}
});