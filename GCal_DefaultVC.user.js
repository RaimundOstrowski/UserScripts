// ==UserScript==
// @name         GCal Default to First Add-On
// @namespace    https://beta.goodnotes.com
// @version      1.0.0
// @description  Selects First Add-On (ex Web-ex) by default when no VC is selected.
// @author       RaimundOstrowski
// @match        https://calendar.google.com/calendar/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  document.addEventListener("click", function (event) {
    let vcSelect = document.getElementById('xAddRtcSel');
      if (vcSelect) {
         let noVC = Array.from(vcSelect.querySelectorAll('span')).find(x => x.textContent === 'Add video conferencing');
         if (noVC) {
             noVC.click();
             setTimeout(function (){
                 let meetVC = document.querySelector("ul[aria-label='Conferencing solutions'] > li[tabindex='-1']");
                 meetVC.click();
             }, 100);
         }
      }
  });


})();
