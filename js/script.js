function selectMain(){
    contentmain.style.display="block";
    contentworks.style.display="none";
    contentservise.style.display="none";
    contentcontacts.style.display="none";
}
function selectWorks(){
   contentmain.style.display="none";
   contentworks.style.display="block";
   contentservise.style.display="none";
   contentcontacts.style.display="none"; 
   var element = document.getElementById("menuMain);
    element.classList.remove("active");
  
}
function selectServise(){
   contentmain.style.display="none";
   contentworks.style.display="none";
   contentservise.style.display="block";
   contentcontacts.style.display="none";    
}
function selectContacts(){
   contentmain.style.display="none";
   contentworks.style.display="none";
   contentservise.style.display="none";
   contentcontacts.style.display="block";    
}
function selectMain(){
  var contentmain = document.getElementById("contentmain");
  contentmain.classList.add("active");
  contentmain.classList.remove("disactive");
  var contentworks = document.getElementById("contentworks");
  contentworks.classList.add("disactive");
  contentworks.classList.remove("active");
  var contentservise = document.getElementById("contentworks");
  contentservise.classList.add("disactive");
  contentservise.classList.remove("active"); 
  var contentcontacts = document.getElementById("contentcontacts");
  contentcontacts.classList.add("disactive");
  contentcontacts.classList.remove("active"); 
}
function selectWorks() {
  var contentmain = document.getElementById("contentmain");
  contentmain.classList.add("disactive");
  contentmain.classList.remove("active");
  var contentworks = document.getElementById("contentworks");
  contentworks.classList.add("active");
  contentworks.classList.remove("disactive");
  var contentservise = document.getElementById("contentworks");
  contentservise.classList.add("disactive");
  contentservise.classList.remove("active"); 
  var contentcontacts = document.getElementById("contentcontacts");
  contentcontacts.classList.add("disactive");
  contentcontacts.classList.remove("active"); 
} 
function selectServise() {
  var contentmain = document.getElementById("contentmain");
  contentmain.classList.add("disactive");
  contentmain.classList.remove("active");
  var contentworks = document.getElementById("contentworks");
  contentworks.classList.add("disactive");
  contentworks.classList.remove("active");
  var contentservise = document.getElementById("contentworks");
  contentservise.classList.add("active");
  contentservise.classList.remove("disactive"); 
  var contentcontacts = document.getElementById("contentcontacts");
  contentcontacts.classList.add("disactive");
  contentcontacts.classList.remove("active"); 
} 
function selectContacts() {
  var contentmain = document.getElementById("contentmain");
  contentmain.classList.add("disactive");
  contentmain.classList.remove("active");
  var contentworks = document.getElementById("contentworks");
  contentworks.classList.add("disactive");
  contentworks.classList.remove("active");
  var contentservise = document.getElementById("contentworks");
  contentservise.classList.add("disactive");
  contentservise.classList.remove("active"); 
  var contentcontacts = document.getElementById("contentcontacts");
  contentcontacts.classList.add("active");
  contentcontacts.classList.remove("disactive"); 
} 


