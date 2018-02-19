var pesquisa = document.querySelector("#lupa");
var ul = document.querySelector("#ul-nav");
var imagem = document.querySelector("#troca1");
var conteudo = document.querySelector("#conteudo")
var header = document.querySelector("#inicio");
var sumir1 = document.querySelector("#fotos5");
var sumir2 = document.querySelector("#fotos6");
var sumir3 = document.querySelector("#fotos7");
var sumir4 = document.querySelector("#fotos8");


pesquisa.addEventListener("click", function () {
    ul.classList.add("visivel");
    pesquisa.classList.add("visivel2");
    imagem.classList.add("opacidade");
    conteudo.classList.add("mover-conteudo");
    header.classList.add("mover-header");
    sumir1.classList.add("invi");
    sumir2.classList.add("invi");
    sumir3.classList.add("invi");
    sumir4.classList.add("invi");
    
});

pesquisa.addEventListener("dblclick", function(){
    ul.classList.remove("visivel");
    pesquisa.classList.remove("visivel2");
    imagem.classList.remove("opacidade");
    conteudo.classList.remove("mover-conteudo");
    header.classList.remove("mover-header");
});