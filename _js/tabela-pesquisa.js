
var campo = document.querySelector("#procura-icampo");
var tabelaErro = document.querySelector("#tabela-erro");


campo.addEventListener("input", function(){
    var campoTr = document.querySelectorAll(".tabela");

    if(this.value.length > 0){
        for(var i = 1; i < campoTr.length; i++){
    
            var docetr = campoTr[i];
            var doceTd = docetr.querySelector(".tabela-td1");
            var doce = doceTd.textContent;
            var expressao = new RegExp(this.value, "i");
            
            if(expressao.test(doce)){
                docetr.classList.remove("invisivel");
            }
            else{
                docetr.classList.add("invisivel");
               
            }
        }
    }

    else{
        for(var i = 1; i < campoTr.length; i++){
            var docetr = campoTr[i];
            docetr.classList.remove("invisivel");   
        }
}
});


