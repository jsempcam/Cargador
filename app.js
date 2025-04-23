// Simulación de datos de cargadores
const cargadores = [
  { id: 1, tipo: 'rápido', estado: 'libre' },
  { id: 2, tipo: 'estándar', estado: 'ocupado' },
  { id: 3, tipo: 'compatible', estado: 'en reparación' }
];

function buscarCargadores() {
  const tipo = document.getElementById("tipoCargador").value;
  const lista = document.getElementById("listaCargadores");
  lista.innerHTML = "";

  cargadores
    .filter(c => !tipo || c.tipo === tipo)
    .forEach(c => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${c.id}</td>
        <td>${c.tipo}</td>
        <td>${c.estado}</td>
        <td><button onclick="verDetalles(${c.id})">Ver Detalles</button></td>
      `;
      lista.appendChild(fila);
    });
}

function verDetalles(id) {
  const cargador = cargadores.find(c => c.id === id);
  const detalle = document.getElementById("detalleCargador");
  detalle.innerHTML = `
    ID: ${cargador.id}<br>
    Tipo: ${cargador.tipo}<br>
    Estado: ${cargador.estado}
  `;
  document.getElementById("modal").style.display = "block";
}

function reservarCargador() {
  alert("Reserva realizada correctamente ✅");
  document.getElementById("modal").style.display = "none";
}

window.onload = () => {
  document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });
};
