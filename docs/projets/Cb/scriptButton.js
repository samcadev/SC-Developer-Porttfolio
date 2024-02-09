const pais = document.querySelector("#pais");
const cedula = document.querySelector("#Cedula");
const nDocument = document.querySelector("#nDocumento");
const password = document.querySelector("#password");


nDocument.onclick = alerta;
password.onclick = alertaEspecial;


function alerta() {
    alert("NO INGRESE DATOS REALES!!!!");
    window.alert("NO INGRESE DATOS REALES!!!");
}
function alertaEspecial() {
    alert("ATENCIÓN! NO INGRESE SU CONTRASEÑA REAL!");
    alert("ATENCIÓN! NO INGRESE SU CONTRASEÑA REAL!");
    alert("No ingrese datos reales");
    alert("Ingrese una contraseña aleatoria");
}