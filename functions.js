const iteracja=1;

//console.log("Hello world");
const sayHello = (str="") => { console.log("Hello World " + str) }
// sayHello(1+2*3);

const add = (a,b) => {
    console.log("suma wynosi: ",a+b);
}
// add(2,3)

module.exports = {
    sayHello,
    add
}
