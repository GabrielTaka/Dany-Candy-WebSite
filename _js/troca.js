var icone = document.querySelector("#troca");

function TrocaFoto(foto){
    document.getElementById("lupa").src=foto;
}

function TrocaFoto2(imagem){
    document.getElementById("troca").src=imagem;
    icone.classList.remove("opacidade");
}

