var input, output;
/*----------------------Encriptar---------------------------*/
function encriptar() {
    //Obtener valores
    input = document.getElementById("tbInput").value;

    if (input == "") {
        document.getElementById("padlock").src = "src/notFound.png"
        document.getElementById("key").textContent = "Escribe algo!";
        //Corta un error en codigo (lo parchea)
        document.getElementById("tbOutput").value = "";
    } else {
        output = codigoSecreto(input)
    }

}

function codigoSecreto(input) {
    output = input
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    refresh();
}
/*----------------------Desencriptar---------------------------*/
function desencriptar() {
    input = document.getElementById("tbOutput").value;

    if (input == "") {
        document.getElementById("padlock").src = "src/notFound.png"
        document.getElementById("key").textContent = "Escribe algo!";
        //Corta un error en codigo (lo parchea)
        document.getElementById("tbInput").value = "";
    } else {
        output = codigoLegible(input)
    }
}

/* el opuesto de codigoSecreto(), sirve para desencriptar*/
function codigoLegible() {
    output = input
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

    refresh();

}

/*-------------------------Copiar------------------------------*/
var botonCopiar = document.getElementById("btncopy");
botonCopiar.addEventListener("click", function() {
  var textarea = document.getElementById("tbOutput");
  textarea.select();

  navigator.clipboard.writeText(textarea.value)
    .then(function() {
      alert("Texto copiado al portapapeles: " + textarea.value);
    })
    .catch(function(error) {
      alert("Error al copiar el texto: " + error);
    });
    document.getElementById("tbOutput").value = "";
});

function refresh() {

    let selector1 = document.getElementById("tbInput").value
    

    if (selector1 != "") {
        document.getElementById("tbOutput").value = output
        document.getElementById("key").textContent = "Encriptado!";
        document.getElementById("padlock").src = "src/close.png"
        document.getElementById("tbInput").value = null;
    } else{
        document.getElementById("tbInput").value = output
        document.getElementById("key").textContent = "Desencriptado";
        document.getElementById("padlock").src = "src/open.png"
        document.getElementById("tbOutput").value = null;
    }
}