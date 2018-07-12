submit.addEventListener('click', function(e) {
    var firstNumber = first.value;  // read value from input with id="str"
    //var res = str.split('').reverse().join(''); // reverse symbols in a string
    //firstP.innerHTML = firstNumber; // write result to span with is="result"
    


    var e = document.getElementById("math");
var action = e.options[e.selectedIndex].text;
var sign;
switch(action){
case 'plus' : sign = Number(firstNumber) + Number(firstNumber); break;
case 'minus' : sign = '-'; break
case 'multi' : sign = firstNumber * firstNumber; break
case 'division' : sign = '/'; break
}

alert(sign);
    e.preventDefault(); // prevent form submission
  });