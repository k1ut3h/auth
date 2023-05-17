const readLineSync = require('readline-sync');

let credentials = {
    "admin": "admin",
    "username": "password",
    "geo": "hot",
    "name": "galactus",
};

function authenticate_user(username, password, credentials){
    for (let name in credentials){
        if (username==name && password==credentials[name]){
            return true;
        }
    }
    return false;
}

while (true){
    let username = readLineSync.question("Enter username: ");
    let password = readLineSync.question("Enter password: ");

    if (authenticate_user(username, password, credentials)){
        console.log("top secret information");
        return;
    } else {
        console.log("try again!");
    }
}



