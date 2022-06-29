function gerarRecibo() {
  document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
  document.getElementById('recibo_telefone').innerHTML = document.getElementById('telefone').value;
  document.getElementById('recibo_numero').innerHTML = document.getElementById('numero').value;
}

function gerarImpressao() {
  document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
  document.getElementById('recibo_telefone').innerHTML = document.getElementById('telefone').value;
  document.getElementById('recibo_numero').innerHTML = document.getElementById('numero').value;
  window.print();
}