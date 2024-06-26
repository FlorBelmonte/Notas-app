let btnCrear = document.getElementById('btnCrear');
let notas = JSON.parse(localStorage.getItem('notas')) || [];

const crear = () => {
    let nuevaNota = document.getElementById('ingresarNota').value;

    if (nuevaNota.trim() === '') return;

    let nota = {
        "ingresarNota": nuevaNota,
    }
    notas.push(nota);
    guardarNotas();
    mostrarNotas();

     document.getElementById('ingresarNota').value = '';
}

const eliminarNota = (index) => {
    notas.splice(index, 1);
    guardarNotas();
    mostrarNotas();
}

const guardarNotas = () => {
    localStorage.setItem('notas', JSON.stringify(notas));
}

const mostrarNotas = () => {
    let contenedor = document.getElementById('tblNotas');
    let tabla = '';

    for (let i = 0; i < notas.length; i++) {
        let r = notas[i];
        tabla +=
          `<div class="nota-item">
             <textarea readonly>${r.ingresarNota}</textarea>
             <button onclick="eliminarNota(${i})">Borrar</button>
          </div>`;
    }

    contenedor.innerHTML = tabla;
}

btnCrear.addEventListener('click', crear);

mostrarNotas();


