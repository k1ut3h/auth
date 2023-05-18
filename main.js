const readLineSync = require('readline-sync');
const sha256 = require('crypto-js/sha256');
const fs = require('fs');
const sqlite = require('better-sqlite3');

let db = new sqlite(__dirname+"/credentials.db");

let credentials = db.prepare("SELECT * FROM CREDENTIALS").all();


function authenticate_user(username, password, credentials){
    for (let i in credentials){
        if (username==credentials[i].username){
            if (String(sha256(password)).toUpperCase()==credentials[i].password){
                return true;
            }
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



