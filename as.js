var fs= require("fs");
var ws=fs.createWriteStream("jjj.txt");
ws.write("hai");
ws.write("hello");
ws.end();
