document.addEventListener("DOMContentLoaded", function () {

    var tela = document.getElementById("tela");

    
    var listenerBtn = [];

    
    var btnResultado = document.getElementById("resultado");
    var btnLimparTela = document.getElementById("limparTela");
    var btnApagarAnterior = document.getElementById("apagarAnterior");

    listenerBtn.push(document.getElementById("ponto"));

   
    listenerBtn.push(document.getElementById("soma"));
    listenerBtn.push(document.getElementById("subtracao"));
    listenerBtn.push(document.getElementById("divisao"));
    listenerBtn.push(document.getElementById("multiplicacao"));

    
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", passarValorTela);
    }

    btnResultado.onclick = function () {
        verificarResulatado();
    }

    function verificarResulatado() {
        try {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            if (verificarOperador(aux)) {
                apagarAnterior();
            }

            var valorCalculado = eval(tela.value); 
            if (valorCalculado || valorCalculado == "0") {
                tela.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    function passarValorTela() {

        if (verificarOperador(this.value)) {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            
            if (verificarOperador(aux)) {
                apagarAnterior();
            }
        }
        if (this.value) {
            tela.value += this.value;
        }

    }

    btnApagarAnterior.onclick = function () {
        apagarAnterior();
    }

    function apagarAnterior() {
        if (tela.value.length > 0) {
            var aux = tela.value.substring(0, tela.value.length - 1);
            tela.value = aux;
        }
    }

    btnLimparTela.onclick = function () {
        tela.value = "";
    }

    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }

});