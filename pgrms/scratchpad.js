
function evenno(num){
  var sum = 0;
for(var i = 2; i <=num; i = i+2){
 sum = sum + i; 
}
  console.log(sum);
}
evenno(100)


function divisibleby(lb, ub, num1, num2){
  for(var i = lb; i <= ub; i++){
    if((i % num1==0) && (i % num2 == 0))
      console.log(i);
  }
 
}
divisibleby(10, 100, 2, 20)


function isprime(num){
  flag = true;
  if(num < 2)
    flag = false;
  for(i = 2; i <= Math.sqrt(num); i++){
    if(num % i ==0){
      flag = false;
      break;
    }
  }
 
  return flag;
}

function printPrimes(lb, ub){
  for(var i = lb; i <= ub; i++){
    if(isprime(i)){
      console.log(i);
    }
  }
}

printPrimes(2, 10)

for(var i = 1; i <= 20; i++){
  num=i;
for(var j = 1;j <= 10; j++){
  console.log(num+ " * " + j + " = " +(num * j));
}
  console.log("-----------------");
}

  
 for(var i = 1; i <= 5; i++){
   var data="";
  for(var j = 1; j <= i; j++)
    {
      data += j+" ";
    }
   console.log(data);
 }

for(var i = 5; i >= 1; i--){
   var data="";
  for(var j = 1; j <= i; j++)
    {
      data += j+" ";
    }
   console.log(data);
 }

for(var i = 0; i < 3; i++){
  var data = "";
 for(var j = 0; j < 3; j++){
   data += i+ "" +j+ " ";
 }
  console.log(data);
}








/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/1:74
*/