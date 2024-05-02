function agregarElemento() {
    const nombre = document.getElementById("nombre").value.trim();
   // (nombre !== "" && apellido !== "" && edad !== "" && nota !== "")
    if (nombre !== "" ) {
      const li = document.createElement("li");
      li.innerHTML = `
        Nombre: ${nombre}<br>
        <span onclick="eliminarElemento(this)">Eliminar</span>
      `;
      document.getElementById("lista").appendChild(li);
      document.getElementById("nombre").value = "";
    
    }
  }
  function eliminarElemento(elemento) {
    elemento.parentNode.remove();
  }
  