
function numeroAleatorio(e, n) {
  return Math.round(Math.random() * (n - e) + e)
}
function random_value_from_array (e) {
  return e[Math.floor(Math.random() * e.length)]
}
function numero_aleatorio_digitos(e) {
  return pad(Math.floor(Math.random() * Math.pow(10, e)).toString(), e)
}
function letra_aleatoria () {
  return random_value_from_array("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
};


function calcula_dc(r) {
    for (var a = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6), e = 0, n = 0, t = 0; t <= 7; t++) e += parseInt(r.charAt(t)) * a[t + 2];
    for (11 == (e = 11 - (e % 11)) ? (e = 0) : 10 == e && (e = 1), t = 10; t <= 19; t++) n += parseInt(r.charAt(t)) * a[t - 10];
    return 11 == (n = 11 - (n % 11)) ? (n = 0) : 10 == n && (n = 1), e.toString() + n.toString();
}
function genera_ccc() {
    var r = random_value_from_array(bancos),
        a = numero_aleatorio_digitos(4),
        e = numero_aleatorio_digitos(10);
    return r + a + calcula_dc(r + a + "--" + e) + e;
}

function genera_iban() {
    return IBAN.convertir(genera_ccc()).split(" ").join("");
}


function pad (e, n) {
  return (e = e.toString()).length < n ? pad("0" + e, n) : e
}
function genera_nif() {
  var r = Math.floor(1e8 * Math.random());
  return pad(r.toString(), 8) + calcula_letra(r);
}
function genera_nie() {
  var r = Math.floor(3 * Math.random()),
      t = Math.floor(1e7 * Math.random()),
      a = calcula_letra(pad(parseInt(r.toString() + pad(t.toString(), 7), 10), 8));
  return "XYZ".charAt(r) + pad(t.toString(), 7) + a;
}

function calcula_letra(r) {
  return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(r % 23);
}

function click(e) {
 var name=e.target.getAttribute('id');
  switch(name){

    case 'btnNif':
       var valor=genera_nif();
       document.getElementById('nif').value=valor;
      break;
    case 'btnNie':
      var valor=genera_nie();
      document.getElementById('nie').value=valor;
      break;
    case 'btnIban':
      var valor=genera_iban();
      document.getElementById('iban').value=valor;
      break;

    default:
      break;
  }
}

function copy(e){
  var valor=e.target.parentElement.getAttribute('id');
  switch(valor){
    case 'nifBlock':
      copyToClipboard(document.getElementById('nif').value);
      break;
    case 'nieBlock':
    copyToClipboard(document.getElementById('nie').value);
      break;
    case 'ibanBlock':
      copyToClipboard(document.getElementById('iban').value);
      break;
  }
}
function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }

  var divs = document.querySelectorAll('.copy');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', copy);
  }
  var valor=genera_nif();
  document.getElementById('nif').value=valor;

  var valor=genera_nie();
  document.getElementById('nie').value=valor;

  var valor=genera_iban();
  document.getElementById('iban').value=valor;
});
