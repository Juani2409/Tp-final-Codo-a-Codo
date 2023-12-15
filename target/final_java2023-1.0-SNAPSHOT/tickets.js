function calcularTotal() {
    const cantidad = document.getElementById("cantidadInput").value;
    const tipo = document.getElementById("tipoSelect").value;

    let total = cantidad * 200;

    if (tipo === "estudiante") {
        total -= total * 0.8; // Resta el 80% si el tipo es "estudiante"
    }
    else if (tipo === "junior") {
        total -= total * 0.5; 
    } else {
        total -= total * 0.15;
    }

    document.getElementById("totalPagar").textContent = `Total a Pagar: $${total.toFixed(2)}`;
}
function mostrarResumen() {
    const nombreInput = document.querySelector('input[placeholder="Nombre"]');
    const apellidoInput = document.querySelector('input[placeholder="Apellido"]');
    const correoInput = document.querySelector('input[placeholder="Correo"]');
    const cantidadInput = document.getElementById("cantidadInput");
    const categoriaInput = document.getElementById("tipoSelect");
    
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const correo = correoInput.value;
    const cantidad = cantidadInput.value;
    const categoria = categoriaInput.value;
    const total = document.getElementById("totalPagar").textContent;

    const resumen = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nCantidad: ${cantidad}\nCategoria: ${categoria}\n${total}`;

    alert(resumen);

    // Limpiar los campos
    nombreInput.value = '';
    apellidoInput.value = '';
    correoInput.value = '';
    cantidadInput.value = '';
    categoriaInput.value = 'estudiante'; // Puedes establecer el valor predeterminado que desees

    // Mostrar la segunda alerta
    alert('¡Felicitaciones! Has adquirido tus entradas. Por favor, verifica tu email.');
}



function verificarRequisitos() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const apellido = document.querySelector('input[placeholder="Apellido"]').value;
    const correo = document.querySelector('input[placeholder="Correo"]').value;
    const cantidad = document.getElementById("cantidadInput").value;
    const categoria = document.getElementById("tipoSelect").value;

    if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || cantidad.trim() === '' || categoria.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        mostrarResumen();
    }
}

document.getElementById('resumenButton').addEventListener('click', verificarRequisitos);





//Boton Borrar


function borrarDatos() {
    const nombreInput = document.querySelector('input[placeholder="Nombre"]');
    const apellidoInput = document.querySelector('input[placeholder="Apellido"]');
    const correoInput = document.querySelector('input[placeholder="Correo"]');
    const cantidadInput = document.getElementById("cantidadInput");
    const categoriaInput = document.getElementById("tipoSelect");

    // Limpiar los campos
    nombreInput.value = '';
    apellidoInput.value = '';
    correoInput.value = '';
    cantidadInput.value = '';
    categoriaInput.value = 'estudiante'; // Puedes establecer el valor predeterminado que desees
}



//Funcion para que el header lleve a home correctamente en el deploy

// Función para redirigir a la página correspondiente
function redirectToPage(page) {
    window.location.href = page + ".html";
}

// Obtener los enlaces
var conferenciaLink = document.getElementById('conferenciaLink');
var oradoresLink = document.getElementById('oradoresLink');
var lugarFechaLink = document.getElementById('lugarFechaLink');
var convierteteLink = document.getElementById('convierteteLink');
var logoLink = document.querySelector('.navbar-brand');
// Agregar eventos a los enlaces para redirigir a las páginas correspondientes
conferenciaLink.addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage("index");
});

oradoresLink.addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage("index");
});

lugarFechaLink.addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage("index");
});

convierteteLink.addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage("index");
});

logoLink.addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage("index");
});


// El enlace "Comprar tickets" ya tiene un evento, no es necesario agregar uno nuevo
