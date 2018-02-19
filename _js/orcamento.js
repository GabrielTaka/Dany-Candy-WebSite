var botao = document.querySelector("#botao-enviar");



botao.addEventListener("click", function () {
    var brigadeiroPequeno = document.querySelector("#input-brigadeiroP");
    var brigadeiroP = brigadeiroPequeno.value;

    var brigadeiroGrande = document.querySelector("#input-brigadeiroG");
    var brigadeiroG = brigadeiroGrande.value;

    var beijinhoPequeno = document.querySelector("#input-beijinhoP");
    var beijinhoP = beijinhoPequeno.value;

    var beijinhoGrande = document.querySelector("#input-beijinhoG");
    var beijinhoG = beijinhoGrande.value;

    var casadinhoPequeno = document.querySelector("#input-casadinhoP");
    var casadinhoP = casadinhoPequeno.value;

    var casadinhoGrande = document.querySelector("#input-casadinhoG");
    var casadinhoG = casadinhoGrande.value;

    var cupCake = document.querySelector("#input-caupcake");
    var cupCakeG = cupCake.value;

    var bombom = document.querySelector("#input-bombom");
    var bombomC = bombom.value;

    var bombomMorango = document.querySelector("#input-bombomMorango");
    var bombomM = bombomMorango.value;

    var canudinho = document.querySelector("#input-canudinho");
    var canudo = canudinho.value;

    var donuts = document.querySelector("#input-donuts");
    var dnts = donuts.value;

    var camafeu  = document.querySelector("#input-camafeu");
    var cam = camafeu.value;

    var valorTotal = document.querySelector("#total");
    valorTotal.textContent= ((brigadeiroP * 0.28) + (brigadeiroG * 1.00) + (beijinhoP *0.28) + (beijinhoG * 1.00) + (casadinhoP * 0.28) + (casadinhoG * 1.00) + (cupCakeG * 2.00) + (bombomC * 1.50) + (bombomM * 2.50) + (canudo * 1.50) + (dnts * 2.50) + (cam *1.50)).toFixed(2);
   
})