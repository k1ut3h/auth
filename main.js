const readLineSync = require('readline-sync');
const sha256 = require('crypto-js/sha256');

let credentials = {
    "admin": "8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918",
    "username": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
    "geo": "7F5D1618E7D28CC7BF32788672BE04C24877D9A8911F65FEF8E3E013C9CBC373",
    "name": "2A85D96158900EEAEB64C4B1D5542D8BBB6FE985EAD41764B92661123388BD6B",
};

function authenticate_user(username, password, credentials){
    for (let name in credentials){
        if (username==name && String(sha256(password)).toUpperCase()==credentials[name]){
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



