function sumar(){
    let suma1 = document. getElementById("sumando1");
    let suma2 = document. getElementById("sumando2");

    let resultado = parseFloat( suma1.value) + parseFloat (suma2.value);

    let resultadohtml = document. getElementById ("resultadoSuma");
    resultadohtml.innerHTML = resultado;
    alert(resultado);
}

function dividir(){
    let dividido = document.getElementById ("division1");
    let dividendo = document.getElementById ("division2");
}