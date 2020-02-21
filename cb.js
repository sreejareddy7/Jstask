function verifyUser(uname,pwd, callback) {
    if(uname === 'sreeja' && pwd === 'bunny')
        callback(uname);
    else
        callback("wrong user");
}
function getRoles(uname, callback) {
    if(uname === 'sreeja')
    {
         role="Software Developer";
         callback(role);
    }
    else{
        callback("wrong username")
    }
    
}
function checkUserAccess(role, callback) {
    if(role==="HR"){
        callback("suceessfully authenticated");
    }
    else if(role === 'TeamHead'){
        callback("suceessfully authenticated");
    }
    else if(role === 'Software Developer'){
        callback("suceessfully authenticated");
    }
    else{
        callback("something is suspicious..");
    }

}

verifyUser("sreejas","bunny", function (uname) {
    getRoles(uname, function (role) {
        checkUserAccess(role, function (msg) {
            console.log(msg);
        })
    })
})