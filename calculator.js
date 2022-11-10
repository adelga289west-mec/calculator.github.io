
function showValue(val){
    
    document.getElementById('result').value += val
}
function clearArea(){
    document.getElementById('result').value = "" 
}
function percentageOp(){
    let a = document.getElementById('result').value;   
    let b = document.getElementById('result').value = a / 100;
    document.getElementById('result').value = b 
}
function negativeOp(){
   
    let b = document.getElementById('result').value;
    let c = "-1"
    document.getElementById('result').value = b * c
}
function solveProblem(){
    let solve = eval(document.getElementById('result').value)
    document.getElementById('result').value = solve;
    

}

