function mostrarTexto() {
    let textArea = document.getElementById('txaEntrada');
    let pSalida = document.getElementById('pSalida');

    let valor = textArea.value;
    pSalida.innerText = valor;

}
