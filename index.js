const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost", user: "root", password: ""
});


app.get('/', (req, res)=> {
    db.connect(function(err){
        if(err) throw err;
        console.log("connecté à la base de donnée");
    });
});
app.listen(PORT, console.log('serveur prêt a ecouter au port'+PORT));