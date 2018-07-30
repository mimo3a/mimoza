
function selectMain() {

// кнопка меню главная

  var buttonmain = document.getElementById("menuMain");
      buttonmain.classList.add("active");
      buttonmain.classList.remove("disactive");
  var buttonworks = document.getElementById("menuWorks");
      buttonworks.classList.add("disactive");
      buttonworks.classList.remove("active");
  var buttonservise = document.getElementById("menuServise");
      buttonservise.classList.add("disactive");
      buttonservise.classList.remove("active"); 
  var buttonaction = document.getElementById("menuActions");
      buttonaction.classList.add("disactive");
      buttonaction.classList.remove("active");  
  var buttoncontacts = document.getElementById("menuContacts");
      buttoncontacts.classList.add("disactive");
      buttoncontacts.classList.remove("active"); 

//переключение раздела на главную

  var contentmain = document.getElementById("contentmain");
      contentmain.classList.add("activepart");
      contentmain.classList.remove("disactivepart");
  var contentworks = document.getElementById("contentworks");
      contentworks.classList.add("disactivepart");
      contentworks.classList.remove("activepart");
  var contentservise = document.getElementById("contentservise");
      contentservise.classList.add("disactivepart");
      contentservise.classList.remove("activepart");
  var contentactions = document.getElementById("contentactions");
      contentactions.classList.add("disactivepart");
      contentactions.classList.remove("activepart");  
  var contentcontacts = document.getElementById("contentcontacts");
      contentcontacts.classList.add("disactivepart");
      contentcontacts.classList.remove("activepart");  
}

function selectWorks() {

//кнопка меню работы

  var buttonmain = document.getElementById("menuMain");
      buttonmain.classList.add("disactive");
      buttonmain.classList.remove("active");
  var buttonworks = document.getElementById("menuWorks");
      buttonworks.classList.add("active");
      buttonworks.classList.remove("disactive");
  var buttonservise = document.getElementById("menuServise");
      buttonservise.classList.add("disactive");
      buttonservise.classList.remove("active");
  var buttonaction = document.getElementById("menuActions");
      buttonaction.classList.add("disactive");
      buttonaction.classList.remove("active");  
  var buttoncontacts = document.getElementById("menuContacts");
      buttoncontacts.classList.add("disactive");
      buttoncontacts.classList.remove("active");

//переключение на раздел работы

  var contentmain = document.getElementById("contentmain");
      contentmain.classList.add("disactivepart");
      contentmain.classList.remove("activepart");
  var contentworks = document.getElementById("contentworks");
      contentworks.classList.add("activepart");
      contentworks.classList.remove("disactivepart");
  var contentservise = document.getElementById("contentservise");
      contentservise.classList.add("disactivepart");
      contentservise.classList.remove("activepart");
  var contentactions = document.getElementById("contentactions");
      contentactions.classList.add("disactivepart");
      contentactions.classList.remove("activepart");  
  var contentcontacts = document.getElementById("contentcontacts");
      contentcontacts.classList.add("disactivepart");
      contentcontacts.classList.remove("activepart");  
}
function selectServise() {

//кнопка меню сервис

  var buttonmain = document.getElementById("menuMain");
      buttonmain.classList.add("disactive");
      buttonmain.classList.remove("active");
  var buttonworks = document.getElementById("menuWorks");
      buttonworks.classList.add("disactive");
      buttonworks.classList.remove("active");
  var buttonservise = document.getElementById("menuServise");
      buttonservise.classList.add("active");
      buttonservise.classList.remove("disactive"); 
  var buttonaction = document.getElementById("menuActions");
      buttonaction.classList.add("disactive");
      buttonaction.classList.remove("active");  
  var buttoncontacts = document.getElementById("menuContacts");
      buttoncontacts.classList.add("disactive");
      buttoncontacts.classList.remove("active"); 

//переключение на раздел сервис

var contentmain = document.getElementById("contentmain");
    contentmain.classList.add("disactivepart");
    contentmain.classList.remove("activepart");
var contentworks = document.getElementById("contentworks");
    contentworks.classList.add("disactivepart");
    contentworks.classList.remove("activepart");
var contentservise = document.getElementById("contentservise");
    contentservise.classList.add("activepart");
    contentservise.classList.remove("disactivepart");
var contentactions = document.getElementById("contentactions");
    contentactions.classList.add("disactivepart");
    contentactions.classList.remove("activepart");  
var contentcontacts = document.getElementById("contentcontacts");
    contentcontacts.classList.add("disactivepart");
    contentcontacts.classList.remove("activepart");  
}
function selectAktions() {
  //кнопка меню акции
 
  var buttonmain = document.getElementById("menuMain");
      buttonmain.classList.add("disactive");
      buttonmain.classList.remove("active");
  var buttonworks = document.getElementById("menuWorks");
      buttonworks.classList.add("disactive");
      buttonworks.classList.remove("active");
  var buttonservise = document.getElementById("menuServise");
      buttonservise.classList.add("disactive");
      buttonservise.classList.remove("active");
  var buttonaction = document.getElementById("menuActions");
      buttonaction.classList.add("active");
      buttonaction.classList.remove("disactive");  
  var buttoncontacts = document.getElementById("menuContacts");
      buttoncontacts.classList.add("disactive");
      buttoncontacts.classList.remove("active"); 
 
 //переключение на раздел акции
 
  var contentmain = document.getElementById("contentmain");
      contentmain.classList.add("disactivepart");
      contentmain.classList.remove("activepart");
  var contentworks = document.getElementById("contentworks");
      contentworks.classList.add("disactivepart");
      contentworks.classList.remove("activepart");
  var contentservise = document.getElementById("contentservise");
      contentservise.classList.add("disactivepart");
      contentservise.classList.remove("activepart");
  var contentactions = document.getElementById("contentactions");
      contentactions.classList.add("activepart");
      contentactions.classList.remove("disactivepart");  
  var contentcontacts = document.getElementById("contentcontacts");
      contentcontacts.classList.add("disactivepart");
      contentcontacts.classList.remove("activepart");  
 } 

function selectContacts() {

//кнопка меню контакты

  var buttonmain = document.getElementById("menuMain");
      buttonmain.classList.add("disactive");
      buttonmain.classList.remove("active");
  var buttonworks = document.getElementById("menuWorks");
      buttonworks.classList.add("disactive");
      buttonworks.classList.remove("active");
  var buttonservise = document.getElementById("menuServise");
      buttonservise.classList.add("disactive");
      buttonservise.classList.remove("active"); 
  var buttonaction = document.getElementById("menuActions");
      buttonaction.classList.add("disactive");
      buttonaction.classList.remove("active");  
  var buttoncontacts = document.getElementById("menuContacts");
      buttoncontacts.classList.add("active");
      buttoncontacts.classList.remove("disactive"); 

//переключение на раздел контакты

  var contentmain = document.getElementById("contentmain");
      contentmain.classList.add("disactivepart");
      contentmain.classList.remove("activepart");
  var contentworks = document.getElementById("contentworks");
      contentworks.classList.add("disactivepart");
      contentworks.classList.remove("activepart");
  var contentservise = document.getElementById("contentservise");
      contentservise.classList.add("disactivepart");
      contentservise.classList.remove("activepart");
  var contentactions = document.getElementById("contentactions");
      contentactions.classList.add("disactivepart");
      contentactions.classList.remove("activepart");  
  var contentcontacts = document.getElementById("contentcontacts");
      contentcontacts.classList.add("activepart");
      contentcontacts.classList.remove("disactivepart");  
}





