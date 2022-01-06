const express = require('express');
const app = express();
const port = 8080;
const basicAuth = require('express-basic-auth');

function authorize(){
    return(req, res, next) => {
        if(req.users !== users) {
        res.status(401)
        return res.send('401 not authorized')
        }
    next()
    }
}

const isAuthenticated = basicAuth({
    users: { admin: "admin" },
    challenge: true,
    
  });

app.get("/", (req, res) =>  { 
    music = ["My Way", "Strangers In The Night", "Somethin' Stupid",
"Three Coins In The Fountain", "Theme From New York New York (Re-Issue)", "(Love Is) The Tender Trap", "Learnin' The Blues", 
"I've Got You Under My Skin", "Love And Marriage", "All The Way", "High Hopes", "Fly Me To The Moon", 
"Love's Been Good To Me", "Witchcraft", "Come Fly With Me", "	Young At Heart", "Ol' Macdonald", "Thats Life", 
"Nice 'N Easy", "Have Yourself A Merry Little Christmas"]

res.send(music[Math.floor(Math.random()*music.length)] + '\n')
});


app.get("/birth_date", (req, res) => { 
   
    res.send("December 12, 1915\n")

})

app.get("/birth_city", (req, res) => { 
   
    res.send("Hoboken, NJ\n")

})

app.get("/wives", (req, res) => { 
   
    res.send("Barbara Sinatra, Ava Gardner, Mia Farrow, Nancy Barbato")

})

app.get("/picture", (req, res) => { 
   
    res.redirect(["https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg", ] )

})

app.get("/public", (req, res) => { 
   
    res.send("Everybody can see this page")

})

app.get('/protected', isAuthenticated, authorize,  function(req, res) {
    res.status(200).send("Welcome, authenticated client");
});

app.listen(port, () => console.log("listening on port" + port))
