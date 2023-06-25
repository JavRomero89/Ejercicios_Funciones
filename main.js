function sayHello() {
    console.log("Hello World!");
}
sayHello();



function square(a) {
	return a*a
}
let result = square(9);
console.log(result);


function sayHi(nombre) {
	console.log("Hi " + nombre);
}
sayHi("Anna");

function completeName(nombre, apellido) {
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
  }
  
  let nombre = "Javier";
  let apellido = "Romero";
  let nombreCompleto = completeName(nombre, apellido);
  console.log(nombreCompleto);


  function Rectangulo(lado1 = 5, lado2 = 3) {
    let area = lado1 * lado2;
    return area;
  } 
  let lado1 = 7;
  let lado2 = 4;
  let areaRect = Rectangulo(lado1, lado2);
  console.log(areaRect); 
  let areaRectangulo = Rectangulo();
  console.log(areaRectangulo);
  

  function converter(gradosCelsius) {
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    return gradosFahrenheit;
  }
  
  let gradosCelsius = 25;
  let gradosFahrenheit = converter(gradosCelsius);
  console.log(gradosFahrenheit); 

  function randomNumber(minimo, maximo) {
    let numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return numeroAleatorio;
  }
  
  let minimo = 10;
  let maximo = 99;
  let numeroAleatorio = randomNumber(minimo, maximo);
  console.log(numeroAleatorio); 
  
  

  function areaCircle(radio) {
    let area = Math.PI * radio**2;
    return area;
  }
  
  let radio = 10;
  let areaCirculo = areaCircle(radio);
  console.log(areaCirculo); 
  


  function calcularIMC(peso, altura) {
    let imc = peso / (altura**2);
  
    console.log("Datos recibidos:");
    console.log("Peso: " + peso + " kg");
    console.log("Altura: " + altura + " m");
    console.log("IMC: " + imc);
  
    return imc;
  }
  
  let peso = 70;
  let altura = 1.75;
  let imc = calcularIMC(peso, altura);


  function comprobarTipoDato() {
  let dato = prompt("Ingrese un dato:");

  let tipo = (typeof dato);

  console.log("El dato ingresado es de tipo: " + tipo);

  return tipo;
}

let tipoDato = comprobarTipoDato();


function adivinarFuturo(numeroHijos, nombrePareja, nombreCiudad, trabajo) {
    let mensaje = `Trabajarás en ${nombreCiudad}, trabajando como ${trabajo}, y tendrás ${numeroHijos} hijos con ${nombrePareja}.`;
    return mensaje;
  }
  
  let numeroHijos = 2;
  let nombrePareja = "Laura";
  let nombreCiudad = "Nueva York";
  let trabajo = "programador";
  
  let mensajeFuturo = adivinarFuturo(numeroHijos, nombrePareja, nombreCiudad, trabajo);
  console.log(mensajeFuturo); 
  