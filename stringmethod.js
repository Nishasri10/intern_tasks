function length(){
let text="Hii , this is the string length"
 document.getElementById("len").innerHTML=text.length
}
function charAt(){
    var text="HELLO WORLD!"
    document.getElementById("cAt").innerHTML=text.charAt(4)
}
function code(){
    var text="HELLO WORLD!"
    document.getElementById("code").innerHTML=text.charCodeAt(3)
}
function at(){
    var text="HELLO WORLD!"
    document.getElementById("at").innerHTML=text.at(3)
}
function pro(){
    let text = "HELLO WORLD";
document.getElementById("pro").innerHTML = text[0];
}
function slice(){
    var text="Name ,Age ,Department ,Course"
    document.getElementById("slice").innerHTML=text.slice(1,14)
}
function sub(){
    var text="Name ,Age ,Department ,Course"
    document.getElementById("sub").innerHTML=text.substring(1,14)
}
function str(){
    var text="Name ,Age ,Department ,Course"
    document.getElementById("str").innerHTML=text.substr(5)
}
function lower(){
    var text="hello world"
    document.getElementById("lower").innerHTML=text.toUpperCase()
}
function upper(){
    var text="hello world"
    document.getElementById("upper").innerHTML=text.toLowerCase()
}
function concat(){
    var text1="Hello"
    var text2="World"
    document.getElementById("concat").innerHTML=text1.concat("" + text2)
}
function con(){
    var text1="Sri"
    var text2="Nisha"
    document.getElementById("con").innerHTML=text2.concat(" " + text1)
}
function trim(){
    var text1="   Hello world   "
    var text2=text1.trim()
    document.getElementById("trim").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}
function start(){
    var text1="   Hello world   "
    var text2=text1.trimStart()
    document.getElementById("start").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}
function end(){
    var text1="   Hello world   "
    var text2=text1.trimStart()
    document.getElementById("end").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}
function padstart(){
    var text=" Sri"
    document.getElementById("padstart").innerHTML="<b>padStart String method:</b>" +text.padStart(9,"Nisha");
}
function padend(){
    var text="Nisha "
    document.getElementById("padend").innerHTML="<b>padEnd String method:</b>" + text.padEnd(9,"Sri");
}
function rep(){
    var text="Nishasri "
    document.getElementById("rep").innerHTML=text.repeat(5)
}
function repl(){
    var text1="The Moon is Hot"
    var text2=text1.replace("Hot","Cold")
    document.getElementById("repl").innerHTML=text2
}
function repla(){
    var text1="The moon glowed like a hot ember in the night sky, casting a hot shimmer over the hot desert sands, under a hot wind that whispered hot secrets from a hot and distant sun."
    var text2=text1.replaceAll("hot","cold")
    document.getElementById("repla").innerHTML=text2
}
function spl(){
    var text1="H,E,L,L,O"
    var text2="W|O|R|L|D"
    var text3="N I S H A"
    var result1 = text1.split(",")
    var result2 = text2.split("|")
    var result3 = text3.split(" ")
    document.getElementById("spl").innerHTML="Split by ',' → " + result1 + "<br>" +
            "Split by '|' → " + result2 + "<br>" +
            "Split by ' ' → " + result3
    
}