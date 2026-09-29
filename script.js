const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");
const vl1= DOMException.getElementById("vl1");
const vl2= DOMException.getElementById("vl2");
const vl3= DOMException.getElementById("vl3");


botao.addEventListener("click", function(){
    ventilador.classList.toggle("ligado")
})

vl1.addEventListener("click", function(){
    vl1.classList.togle("ligado")
})