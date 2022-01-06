var net = require('net');

var client = new net.Socket();
client.connect(8010, '10.86.10.1', function() {
	console.log('Connected');
	//client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log(`${data}`);
    //process.stdout.write(data);
    //console.log(JSON.stringify(data));
    //str
    //console.log(data.replace(/\n/, `\\n`));
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
