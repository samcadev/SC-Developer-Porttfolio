
const busqueda = document.getElementById('busqueda');
const label = document.getElementById('labelBuscar');
const resultados = document.getElementById('result');
const sinResultados = document.getElementById('noResultados')


document.getElementById('busqueda').addEventListener('keyup', buscar)
function buscar() {
    filter = busqueda.value.toUpperCase();
    li = resultados.getElementsByTagName('li');

    let resultadosEncontrados = false;

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            resultadosEncontrados = true;
        } else {
            li[i].style.display = "none";
        }
    }

    if (!resultadosEncontrados) {
        sinResultados.innerText = "Sin resultados para: " + busqueda.value;
    } else {
        sinResultados.innerText = "";
    }
}