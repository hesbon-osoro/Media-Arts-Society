"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Hesbon Osoro
   Date: 12/10/22    
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

/* Event Listeners */

window.addEventListener("load", function () {
  calcCart();
  document.getElementById("regSubmit").onclick = sessionTest;
  document.getElementById("fnBox").onblur = calcCart;
  document.getElementById("lnBox").onblur = calcCart;
  document.getElementById("groupBox").onblur = calcCart;
  document.getElementById("mailBox").onblur = calcCart;
  document.getElementById("phoneBox").onblur = calcCart;
  document.getElementById("banquetBox").onblur = calcCart;
  document.getElementById("sessionBox").onchange = calcCart;
  document.getElementById("mediaCB").onclick = calcCart;
});

function sessionTest() {
  var sessionBox = document.getElementById("sessionBox");
  if (sessionBox.selectedIndex === -1) {
    sessionBox.setCustomValidity("Select a Session Package");
  } else {
    sessionBox.setCustomValidity("");
  }
}

function calcCart() {
  var firstName = document.getElementById("fnBox").value;
  var lastName = document.getElementById("lnBox").value;
  var confName = firstName + " " + lastName;
  sessionStorage["confName"] = confName;
  var confGroup = document.getElementById("groupBox").value;
  sessionStorage["confGroup"] = confGroup;
  var confMail = document.getElementById("mailBox").value;
  sessionStorage["confMail"] = confMail;
  var confPhone = document.getElementById("phoneBox").value;
  sessionStorage["confPhone"] = confPhone;
  var confBanquet = document.getElementById("banquetBox").value;
  sessionStorage["confBanquet"] = confBanquet;
  var confBanquetCost = confBanquet * 55;
  sessionStorage["confBanquetCost"] = confBanquetCost;
  var sessionBox = document.getElementById("sessionBox");
  if (sessionBox.selectedIndex !== -1) {
    var confSession = sessionBox.options[sessionBox.selectedIndex].text;
    sessionStorage["confSession"] = confSession;
    var confSessionCost = sessionBox.value;
    sessionStorage["confSessionCost"] = confSessionCost;
  } else {
    sessionStorage["confSession"] = "";
    sessionStorage["confSessionCost"] = 0;
  }
  var confPack = document.getElementById("mediaCB").checked ? "yes" : "no";
  sessionStorage["confPack"] = confPack;
  var confPackCost = confPack === "yes" ? 115 : 0;
  sessionStorage["confPackCost"] = confPackCost;
  var confTotal =
    parseFloat(sessionStorage["confSessionCost"]) +
    parseFloat(sessionStorage["confBanquetCost"]) +
    parseFloat(sessionStorage["confPackCost"]);
  sessionStorage["confTotal"] = confTotal;
  writeSessionValues();
}

function writeSessionValues() {
  document.getElementById("regName").textContent = sessionStorage["confName"];
  document.getElementById("regGroup").textContent = sessionStorage["confGroup"];
  document.getElementById("regEmail").textContent = sessionStorage["confMail"];
  document.getElementById("regPhone").textContent = sessionStorage["confPhone"];
  document.getElementById("regSession").textContent =
    sessionStorage["confSession"];
  document.getElementById("regBanquet").textContent =
    sessionStorage["confBanquet"];
  document.getElementById("regPack").textContent = sessionStorage["confPack"];
  document.getElementById("regTotal").textContent =
    "$" + sessionStorage["confTotal"];
}
