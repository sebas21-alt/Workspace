// Crear el botón y agregarlo al body
const boton = document.createElement('button');
boton.textContent = 'Mostrar nombres';
document.body.appendChild(boton);

// Lista de 7 nombres
const nombres = ['Ana', 'Luis', 'Pedro', 'Sofía', 'Carlos', 'María', 'Juan'];

// Crear un contenedor para la lista
const lista = document.createElement('ul');
document.body.appendChild(lista);

boton.addEventListener('click', function() {
    // Limpiar la lista antes de agregar los nombres
    lista.innerHTML = '';
    for (let i = 0; i < nombres.length; i++) {
        const item = document.createElement('li');
        item.textContent = nombres[i];
        lista.appendChild(item);
    }
});