
function add(){
    let input1=document.getElementById("one")
let input2=document.getElementById("two")
let Result=document.getElementById("output")
    return(
        a=Number(input1.value)+Number(input2.value),
        Result.innerHTML="Addition of two numbers : " + a,
        console.log(a)
    )
}
function sub(){
let input1=document.getElementById("one1")
let input2=document.getElementById("two1")
let Result=document.getElementById("output1")
    return(
        a=Number(input1.value)-Number(input2.value),
        Result.innerHTML="Subtraction of two numbers : " + a,
        console.log(a)
    )

}
function mul(){
let input1=document.getElementById("one2")
let input2=document.getElementById("two2")
let Result=document.getElementById("output2")
    return(
        a=Number(input1.value)*Number(input2.value),
        Result.innerHTML="Multipilcation of two numbers : " + a,
        console.log(a)
    )

}
function div(){
let input1=document.getElementById("one3")
let input2=document.getElementById("two3")
let Result=document.getElementById("output3")
    return(
        a=Number(input1.value)/Number(input2.value),
        Result.innerHTML="Division of two numbers : " + a,
        console.log(a)
    )

}