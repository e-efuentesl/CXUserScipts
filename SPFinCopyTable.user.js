// ==UserScript==
// @name         SPFin Copy Table
// @namespace    *
// @version      1.1
// @description  Try to copy Data
// @author       You
// @match        *://memsim.cenace.gob.mx/*/TransaccionesBilaterales/*
// @grant        none
// @UpdateURL    https://github.com/e-efuentesl/CXUserScipts/raw/master/SPFinCopyTable.user.js
// ==/UserScript==

(function() {
    'use strict';

    var aTags = document.getElementsByClassName("panel-title");
    var searchText = "Perfil Horario";
    var element;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
            element = aTags[i];
            break;
        }
    }

element.innerHTML = "Perfil Horario"+"  <div style='font-size:10px;' class='copy-table btn btn-danger'>Copiar Datos</div>";
document.getElementsByClassName("copy-table")[0].onclick = function(){copy_data()}	
function copy_data(){
const btn = document.createElement("button");

var nodes = [].slice.call(document.getElementsByTagName("input"));
var th_text = [].slice.call(document.getElementsByTagName("th")); 

var data = [];

nodes.forEach(function(e){if(e.name.endsWith(".VALOR")){data.push(e)}});

const el = document.createElement('textarea');
var texto = "";
texto = th_text[0].innerText+"\t"+th_text[1].innerText+"\n";
el.value = texto;
document.body.appendChild(el);

data.forEach(function(e,i){texto=texto+(i+1).toString()+"\t"+e.value+"\n";});

el.value = texto;

el.select();
document.execCommand('copy');
el.hidden = true;
alert("Tabla Copiada")
}

    // Your code here...
})();
