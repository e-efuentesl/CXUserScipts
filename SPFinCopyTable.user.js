document.getElementsByClassName("panel-title")[2].onclick = function(){copy_data()}	
function copy_data(){
const btn = document.createElement("button");

var nodes = [].slice.call(document.getElementsByTagName("input"));
var th_text = [].slice.call(document.getElementsByTagName("th")); 

data = [];

nodes.forEach(function(e){if(e.name.endsWith(".VALOR")){data.push(e)}});

const el = document.createElement('textarea');
var texto = "";
var texto = th_text[0].innerText+"\t"+th_text[1].innerText+"\n";
el.value = texto;
document.body.appendChild(el);

data.forEach(function(e,i){texto=texto+(i+1).toString()+"\t"+e.value+"\n";});

el.value = texto;

el.select();
document.execCommand('copy');
el.hidden = true;
alert("Tabla Copiada")
}