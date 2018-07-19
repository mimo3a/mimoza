localStorage["possitive"]=0;
localStorage["negative"]=0
submit.addEventListener('click', function(e) {
    
    var firstNumber = Number(first.value);  // read value from input with id="str"
    var secondNumber = Number(second.value);  // read value from input with id="str"
    var checkingNumber= Number(checking.value);
    //var res = str.split('').reverse().join(''); // reverse symbols in a string
    //firstP.innerHTML = firstNumber; // write result to span with is="result"
    


    
var action = math.options[math.selectedIndex].value;
var expected;
switch(action){
case 'plus' : expected = firstNumber + secondNumber; break;
case 'minus' : expected = firstNumber - secondNumber; break;
case 'multi' : expected = firstNumber * secondNumber; break;
case 'division' : expected = firstNumber / secondNumber; break;
}


   if (checkingNumber==expected) {
       result.innerHTML=localStorage["possitive"];//"CORRECT";
       localStorage["possitive"] = Number(localStorage["possitive"])+1;
       document.getElementById("grade").style.backgroundColor="green"  ;  
       
    }
    else {
     document.getElementById("result").innerHTML="WRONG";
     localStorage["negative"] = Number(localStorage["negative"])+1;
     document.getElementById("grade").style.backgroundColor="red" ; 
 };
 document.getElementById("storeCorrect").innerHTML=localstore["possitive"];
});