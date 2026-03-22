
const elementTxt = document.getElementById("elements"); 
const sumTxt = document.getElementById("sum");         
const input = document.getElementById("numInput");   


let arr = [];  
let sum = 0;   

function addNumber() {
    
    let num = parseInt(input.value);
    
    if (!isNaN(num)) {
       
        arr.push(num);
        
        sum += num;
        
        input.value = "";
        
        elementTxt.innerHTML = arr.join("<br>");
        
        sumTxt.innerHTML = sum;
    }
}