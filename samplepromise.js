function printmsg(msgval){
    console.log(msgval);
}
var msg=new Promise(function(resolve,reject){
    resolve("hai..hello");
}
)
msg.then(printmsg);

