submit.addEventListener('click', function(e) {
    var firstNumber = Number(first.value);  // read value from input with id="str"
    var secondNumber = Number(second.value);  // read value from input with id="str"
    var checkingNumber= Number(checking.value);
    //var res = str.split('').reverse().join(''); // reverse symbols in a string
    //firstP.innerHTML = firstNumber; // write result to span with is="result"
    


    
var action = math.options[math.selectedIndex].text;
var sign;
switch(action){
case 'plus' : sign = firstNumber + secondNumber; break;
case 'minus' : sign = firstNumber - secondNumber; break;
case 'multi' : sign = firstNumber * secondNumber; break;
case 'division' : sign = firstNumber / secondNumber; break;
}
alert(sign);

  
  if (checkingNumber==sign) {
      document.getElementById("result").innerHTML="CORRECT";}
      else {
    document.getElementById("result").innerHTML="WRONG";
};
});