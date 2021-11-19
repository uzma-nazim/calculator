function get(num) {
    var result = document.getElementById("myinput");
    result.value += num
}
function clearAll() {

    var result = document.getElementById("myinput");
    result.value = "";

}

function allResult() {

    var res = document.getElementById("myinput");
    var s = eval(res.value);
    res.value = s;
    

}



function sin(){
var res = document.getElementById("myinput");
 var sin = Math.sin(res.value);
 res.value = sin;
}


function cos(){
var res = document.getElementById("myinput");
 var cos = Math.cos(res.value);
 res.value = cos;
}

function tan(){
var res = document.getElementById("myinput");
 var tan = Math.tan(res.value);
 res.value = tan;
}

function pai(){

    var res = document.getElementById("myinput");
    res.value =  3.14159265359

}
function log(){
    var res = document.getElementById("myinput");
    var log = Math.log(res.value)
    res.value = log
}
function sqare(){


    var res = document.getElementById("myinput");
    var sqr = Math.sqrt(res.value)
    res.value =sqr
}
function power(){

var res = document.getElementById("myinput")
var pow = Math.pow(res.value,2)
res.value = pow

}
function cube(){

var res = document.getElementById("myinput")
var pow = Math.pow(res.value,3)
res.value = pow

}


function oneclear(){
    var res = document.getElementById("myinput");
    var onecl = res.value.slice(0,-1)
    res.value = onecl


}