verifyUser = (uname, pwd) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (uname === 'sreeja' && pwd === 'bunny') {
                console.log('user verification success');
                resolve('sreeja');
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}

getRoles = (uname) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (uname === 'sreeja') {
                console.log('success roles retrived');
                resolve({
                    "admin": 0,
                    "HR": 1,
                    "TeamHead":0
                });
            } else {
                console.log('failure try other username');
                reject('failure');
            }
        });
    });
}

checkUserAccess = (roles) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roles.admin === 1) {
                console.log('success access to admin');
                resolve('success');
            } else if (roles.HR === 1) {
                console.log('success access to HR');
                resolve('success');
            }else if(roles.TeamHead === 1){
                console.log("success access to TeamHead");
                resolve('success');
            }
             else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}


authenticateUser = (uname, pwd) => {
    verifyUser(uname, pwd).then(getRoles).then(checkUserAccess).then(() =>
     {
        console.log('Sequential execution')
    }).catch(() => {
        console.log('failure')
    });
}

authenticateUser('sreeja', 'bunny');

