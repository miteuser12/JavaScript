function checkprime(){
  num = getUserInput();
    flag = true;
  if(num < 2)
    flag = false;
  for(var i = 2; i <= Math.sqrt(num); i++){
    if(num % i ==0){
      flag = false;
      break;
    }
  }
 if(flag){
showResult(" The number " +num+ " is prime ");
 }
    else{
   showResult(" The number " +num+ " is not a prime ");     
    }
}
   


function factorial(){
  num = getUserInput();
 var res = 1;
for(var i = 2; i <= num; i++){
res *= i;
}
showResult("Factorial of: "+num+" is:" +res);
}



function factors(){
   num = getUserInput();
 var output = " ";
for(var i = 1;i <= num; i++){
    if(num % i == 0)
output += i+"";
}
showResult("Factor of: " +num+ " is:" +output);
}  




function fibonancci(){
    num = getUserInput();
 var res = " ";
 if(num == 1){
     res += "0";
 }else{if(num == 2){
 } else{
         var a=0, b=1;
         res +=" 0 1 ";
         for(var i=3; i<=num;i++){
             c = a + b;
             res += " "+c;
             a=b;
             b=c;
         }
     }
     

showResult("Fibonnanci of: "+num+" is:" +res);
}
      }

    
  function getUserInput(){
      num = document.getElementById("num").value;
      return num;
  }  
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}  
