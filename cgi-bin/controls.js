var port = 8081;
var ip = "192.168.1.9";


var args = process.argv.slice(2);
if (args[0] === undefined) {
	return;
}

var net = require('net');
var client = net.connect(port, ip);

if (args[0] === "forward") {
	client.write("forward");
} else if (args[0] === "back") {
	client.write("back");
} else if (args[0] === "left") {
	client.write("left");
} else if (args[0] === "right") {
	client.write("right");
} else if (args[0] === "up") {
	client.write("up");
} else if (args[0] === "down") {
	client.write("down");
} else if (args[0] === "tilt%20up") {
	client.write("tilt up");
} else if (args[0] === "tilt%20down") {
	client.write("tilt down");
} else if (args[0] === "lights") {
	client.write("lights");
}
client.end();
