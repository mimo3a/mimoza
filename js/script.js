function selectMain(){
    contentmain.style.display="block";
    menuMain.style.color="black";
    contentworks.style.display="none";
    contentservise.style.display="none";
    contentcontacts.style.display="none";
}
function selectWorks(){
   document.getElementById("contentmain").style.display="none";
   document.getElementById("contentworks").style.display="block";
   document.getElementById("contentservise").style.display="none";
   document.getElementById("contentcontacts").style.display="none"; 
   document.getElementById("menuMain").style.color="white";
}
function selectServise(){
   document.getElementById("contentmain").style.display="none";
   document.getElementById("contentworks").style.display="none";
   document.getElementById("contentservise").style.display="block";
   document.getElementById("contentcontacts").style.display="none";    
}
function selectContacts(){
   document.getElementById("contentmain").style.display="none";
   document.getElementById("contentworks").style.display="none";
   document.getElementById("contentservise").style.display="none";
   document.getElementById("contentcontacts").style.display="block";    
}