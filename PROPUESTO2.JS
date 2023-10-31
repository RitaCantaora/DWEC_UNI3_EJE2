function mostrarTexto() {
    // Obtener referencia al textarea
    var txaEntrada = document.getElementById("txaEntrada");
    
    // Obtener el valor del textarea
    var texto = txaEntrada.value;

    // Mostrar el texto en el párrafo
    var pSalida = document.getElementById("pSalida");
    pSalida.textContent = texto;
}

// Registrar el evento click y asociar la función manejadora
btnBoton.addEventListener("click", mostrarTexto);
