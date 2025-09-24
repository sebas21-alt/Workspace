// Obtenemos las referencias de los botones
const btnNombre = document.getElementById('btnNombre');
const btnNumeros = document.getElementById('btnNumeros');
const btnColor = document.getElementById('btnColor');
const output = document.getElementById('botones');

// Función para mostrar el nombre
btnNombre.addEventListener('click', () => {
    output.textContent = "sebastian";
});

// Función para mostrar 10 números
btnNumeros.addEventListener('click', () => {
    const numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);

    }
    output.textContent = numeros.join(", ");
});

// Función para cambiar el color de fondo
btnColor.addEventListener('click', () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});
