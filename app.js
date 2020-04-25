// const functions = require('./functions')
// functions.sayHello ("app.js")
// functions.add (3,5)


//************************/
// const http = require('http'); //do czasu express
// const port =3001;
// const handler = (request,response) => {
//     iteracja=+1;
//     console.log ("sample message:", iteracja);
//     response.end("Hello World on WWW:", request, response)
//     //response.log(1);
// }
// const server = http.createServer(handler);
// server.listen(port,() => { 
//     console.log("server działa na porcie", port)
//     });
// server.listen(port, (err) => {
//     if(err) {
//         return console.log("cos poszło nie tak...",err)
//     }
//     console.log("server działa na porcie", port)
// })
//************************ */

//*******czysty express */
// const express = require("express");
// const port = 3001;
// const app = express();

// //
// app.get ('/', function (req,res) {
//     res.send ("Hello from express");
// })

// app.get ('/about',function(req,res){
//     res.send ("My site")
// })

// app.listen(port, (err) => {
//         if(err) {
//             return console.log("cos poszło nie tak...",err)
//         }
//         console.log("server działa na porcie", port)
//     })

//******************koniec  */

const importFunc = require("./js/func2");
const express = require("express");
//const port = 3001;
const port = process.env.PORT || 3001;

const app = express();
app.set ("view engine",'hbs');
const path = require ('path');
app.use('/assets', express.static(path.join(__dirname,"./assets")));
app.use('/js',express.static(path.join(__dirname,"./js")));
app.use('/js',express.static(__dirname + './../public/js'));

const sample = () => {
    return "Nauka"
}
//
app.get ('/', function (req,res) {

    res.render ('index', {
        pageTitle: "Lekcja NodeJs 25.04",
        subTitle: importFunc.someTitle,
        newVar: sample()
    });
})

app.get ('/zbyszek', function (req,res) {
    res.render ('zbyszek', {
        pageTitle: "Lekcja NodeJs 25.04"
    });
})

app.get ('/index', function (req,res) {
    res.render ('index', {
        pageTitle: "Lekcja 2",
        newVar: "/index"
    });
})

app.get ('/about',function(req,res){
    res.send ("My site")
})

app.get ('/portfolio',function(req,res){
    res.send ("My portfolio")
})

app.listen(port, (err) => {
        if(err) {
            return console.log("cos poszło nie tak...",err)
        }
        console.log("server działa na porcie", port)
    })
