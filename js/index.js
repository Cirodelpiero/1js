//VALIDACION

alert("Hola estas en PetCare.App, para seguir navegando debes ser mayor de edad...");

let edad = parseInt(prompt("Ingresa tu edad"));
while (edad < 18) {
    alert("No podes ingresar")
    edad = parseInt(prompt("Ingresa tu edad nuevamente")) 
}
alert("Bienvenido")


//CICLOS

alert("Juguemos un poco a las tablas")   
let numero = parseInt(prompt("¿Cual tabla quieres saber?"))

for (let i = 1; i <= 10; i++) {
    console.log("el resultado es: " + numero * i );
}

alert("Contamos por vos")
let nombre = prompt("Ingresa tu nombre");

if (nombre !== "") {
    console.log("¡Hola "+ nombre+ " ,tu nombre tiene " + nombre.length + " letras!")
}else{
    nombre = prompt("Ingresa un nombre")
}


let idioma = prompt("Que idioma hablas: ")

while (idioma !== "ninguno") {
    switch (idioma) {
        case "castellano":
            alert("Hola, como estas?");
            break;
        case "ingles":
            alert("Hi, How are you?");
            break;
        case "italiano":
            alert("Ciao, come vai");
            break;
        default:
            alert("ingresa un idioma valido");
            break;
    }
idioma= prompt("Que idioma hablas");
}

