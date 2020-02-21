var fs= require("fs");
function readData(err,data){
    console.log(data);
}
var ws=fs.readFile('jjj.txt','utf-8',readData);

