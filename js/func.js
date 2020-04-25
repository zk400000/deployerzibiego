//alert("Hello world");
const callexample = () => {
    //alert ("clicked");
    const fromInput = document.getElementById("example").value;
    alert ("read:", fromInput);
    document.getElementsByTagName("p")[0].innerHTML = fromInput;
}
document.getElementById("action").addEventListener("click", callexample);

const someTitle = "Zajęcia projektowe";
module.exports = {
    someTitle
}