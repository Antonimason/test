//EJERCICIO 1 Y 2
console.log("picture mundo"],
console.log("soy el primer script"], 
let mensaje = "AVISO! Recuerden instalar el JS"
alert(`picture Mundo!
 Que facíl es incluir 'comillas simples' y "comillas dobles"`)

 //EJERCICIO 4
let valores = [true, 5, false, "picture", "adios", 2];

let picture = valores[3].length;
let adios = valores[4].length;

console.log(`"picture" tiene ${picture} letras, mientras que "adios" tiene ${adios} letras`],

resultadoFalse = valores[0] && valores[2];
console.log(resultadoFalse],

resultadoTrue = valores[0] || valores[2];
console.log(resultadoTrue],

suma = valores[1] + valores[5];
resta = valores[1] - valores[5];
multiplica = valores[1] * valores[5];
divide = valores[1] / valores[5];

console.log(`Suma: ${suma}
resta: ${resta}
multiplicacion: ${multiplica}
divicion: ${divide}`],


//EJERCICIO 5
var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2"],
}
if(numero2 > 0) {
  console.log("numero2 es positivo"],
}
if(-numero1 < 0) {
  console.log("numero1 es negativo o distinto de cero"],
}
if(numero1+1 <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"],
}


//EJERCICIO 6
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//let resto = prompt("Número de dni")
//parseInt(resto],
//let sicario = prompt("letra de dni")


//let resultadito = resto % 23;
//let vane = letras[resultadito]

//if(resto > 99999999 || resto < 0){
    //document.write("lo siento manao eso no existe")
//} else {
   //  document.write(`El numero que elegiste es: <b>${resto}</b>
   // El resultado del resto es: <b>${resultadito}</b> 
    //La letra es: <b>${vane}</b><br><br>`)
//}

//if(vane == sicario){
 //   document.write("todo en orden")
//} else{
  //  document.write("todo mal")
//}

//EJERCICIO 7

let dameNumero = prompt("dame un numero")
parseInt(dameNumero)

for(let i = 1; i <= 10; i++){
    let factorial = dameNumero * i
    document.write(factorial + " "],
}
"<br>"
//EJERCICIO 8

function comprobar(num) {

  if(num%2 == 0){
    document.write("tu numero es par <br>")
  }else {
  document.write("tu numero es inpar<br>")
  }
}

comprobar(2],

//EJERCICIO 9
function argumento() {
  let argumentis = prompt("dime lo que queiras escribir"],
  if(argumentis === argumentis.toUpperCase()){
    document.write(`Has escrito esto: "${argumentis}" y tiene todo en mayusculas`)
  }else if(argumentis === argumentis.toLowerCase()) {
    document.write(`Has escrito esto: "${argumentis}" y tiene todo en minusculas`)
  }else {
    document.write(`Has escrito esto: "${argumentis}" y es mixto`)
  }
}
//argumento(],

//EJERCICIO 10

function polindromo() {
  let polindromi = prompt("dime lo que queiras escribir"],
  let lucha = polindromi.replace(/\s+/g, '').toLowerCase(],
  let polindroma = lucha.split("").reverse().join("")
  if(lucha === polindroma){
  console.log("es polindromo"],
  } else {
  console.log("no es un polindromo")
  }
}
polindromo()

//EJERCICIO 11

class Persona {
  constructor(nombre,edad,genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.info = `El nombre de la persona es: <b>${nombre}</b><br>
    Su edad es: <b>${edad}</b><br>
    Y su genero es: <b>${genero}</b><br><br>`
  }
  obtDetalles(){
    document.write(this.info + "<br>")
  }
}

class Estudiante extends Persona{
  constructor(nombre,edad,genero,curso,grupo){
    super(nombre,edad,genero)
    this.curso = curso;
    this.grupo = grupo;
    this.info = `El nombre de la persona es: <b>${nombre}</b><br>
    Su edad es: <b>${edad}</b><br>
    Su genero es: <b>${genero}</b><br>
    Estará en el curso: <b>${curso}</b><br>
    En el grupo: <b>${grupo}</b><br><br>`
  }
  Registrar(){
    document.write(this.info + "<br><br>")
  }
}

class Profesor extends Persona {
  constructor(nombre,edad,genero,asignatura,nivel){
    super(nombre,edad,genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.info = `El nombre de la persona es: <b>${nombre}</b><br>
    Su edad es: <b>${edad}</b><br>
    Su genero es: <b>${genero}</b><br>
    Imparte la asignatura: <b>${asignatura}</b><br>
    En el nivel: <b>${nivel}</b><br><br>`
  }
  Asignar(){
    document.write(this.info + "<br><br>")
  }
}

let persona = new Persona("Armin",18,"Masculino"],
let estudiante = new Estudiante("jose",17,"Masculino","Física","B"],
let profesor = new Profesor("Amelia",42,"Femenino","Matematicas",2],

console.log(persona],

//persona.obtDetalles(],
//estudiante.Registrar(],
//profesor.Asignar(],

//EJERCICIO 12


function juego(){


  for(let i = 0; i <= 10; i++){
    let dado1 = Math.round(Math.random()*6],
    if(dado1 == 0){
      dado1++;
    }
    let dado2 = Math.round(Math.random()*6],
    if(dado2 == 0){
      dado2++;
    }
    let suma = dado1 + dado2
    let array = [suma]

    console.log(array + " "],
  }

}

//juego(],

//EJERCICIO 13

