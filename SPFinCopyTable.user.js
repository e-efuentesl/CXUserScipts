// ==UserScript==
// @name         SPFin Copy Table
// @namespace    *
// @version      1.5
// @description  Try to copy Data
// @author       You
// @match        *://memsim.cenace.gob.mx/*/TransaccionesBilaterales/*
// @grant        none
// @UpdateURL    https://github.com/e-efuentesl/CXUserScipts/raw/master/SPFinCopyTable.user.js
// ==/UserScript==

(function() {
	
	var element;
	
	function findByElement(cName,cContent){
		var aTags = document.getElementsByClassName(cName);
		var element;
		for (var i = 0; i < aTags.length; i++) {
			if (aTags[i].textContent == cContent) {
				element = aTags[i];
				break;
			}
		}
		return element
	}
	
	element = function('panel-title','Perfil Horario'
	
	element.innerHTML = "Perfil Horario"+"  <div style='font-size:10px;' class='copy-table btn btn-danger'>Copiar Datos</div>";
	
	document.getElementsByClassName("copy-table")[0].onclick = function(){copy_data()}	
	
	function copy_data(){
		const btn = document.createElement("button");
		
		var h_elements = [].slice.call(document.getElementsByTagName('table')[0].getElementsByTagName("thead")[0].getElementsByTagName("th"))
		var headers = []
		h_elements.forEach(function(e){headers.push(e.innerText);});
		
		var l_elements = [].slice.call(document.getElementsByTagName('table')[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr"))
		
		var lines = []
		
		l_elements.forEach(function(m){
			var ele = [];
			ele.push(m.getElementsByTagName("th")[0].innerText);
			var v_list = [].slice.call(m.getElementsByTagName('td'));
			v_list.forEach(function(a){ ele.push(a.children[4].children[0].value); })
			lines.push(ele);
		})
		
		var texto="";
		var texto = texto + headers.join("\t")+"\n"
		
		lines.forEach(function(l){
			var ll= "";
			ll = l.join("\t")+"\n"
			texto = texto + ll
		})
		
		//var nodes = [].slice.call(document.getElementsByTagName("input"));
		//var th_text = [].slice.call(document.getElementsByTagName("th")); 

		//var data = [];

		//nodes.forEach(function(e){if(e.name.endsWith(".VALOR")){data.push(e)}});

		const el = document.createElement('textarea');
		texto = th_text[0].innerText+"\t"+th_text[1].innerText+"\n";
		el.value = texto;
		document.body.appendChild(el);

		//data.forEach(function(e,i){texto=texto+(i+1).toString()+"\t"+e.value+"\n";});

		el.value = texto;

		el.select();
		document.execCommand('copy');
		el.hidden = true;
		alert("Tabla Copiada")
	}

    // Your code here...
})();
