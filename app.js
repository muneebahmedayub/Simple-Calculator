function getNum(num){
    document.getElementById("result").style.fontSize = "40px"
    document.getElementById("result").style.color = "grey"
    document.getElementById("result").style.transition = "0.3s ease"
    document.getElementById("calculation").style.fontSize = "60px"
    document.getElementById("calculation").style.color = "black"
    document.getElementById("calculation").style.transition = "0.3s ease"
    var calculation = document.getElementById("calculation")
    calculation.value += num
    var result = document.getElementById("result")
    result.value = "=" + eval(calculation.value)
}
function clearResult(){
    document.getElementById("result").style.fontSize = "60px"
    document.getElementById("result").style.color = "black"
    document.getElementById("result").style.transition = "0.3s ease"
    var result = document.getElementById("calculation")
    calculation.value = ''
    var result = document.getElementById("result")
    result.value = '0'
}
function getResult(){
    document.getElementById("calculation").style.fontSize = "40px"
    document.getElementById("calculation").style.color = "grey"
    document.getElementById("calculation").style.transition = "0.3s ease"
    document.getElementById("result").style.fontSize = "60px"
    document.getElementById("result").style.color = "black"
    document.getElementById("result").style.transition = "0.3s ease"
}
