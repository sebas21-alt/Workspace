function nombre(){
    let miNombre=document.getElementById("minombre");

    let primerNombre=document.createElement("span");
    let apellido=document.createElement("i");

    primerNombre.innerHTML="Sebastian";
    apellido.innerHTML="Berrio";

    miNombre.appendChild(primerNombre);
    miNombre.appendChild(apellido);
}