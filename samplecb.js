function printmsgcb(msg){
    msg("Hai welcome...");
}
function print(str){
    console.log(str)
}
printmsgcb(print)