const contenedor = document.querySelector(".flex-container") //se elige el selector

let contador = 0;

function crearLlave(nombre,modelo,precio){ //se crea una función con sus caracteristicas
    contador++;
    img = "<img src='llave.png'>"  //se inserta la imagen para todos los resultados
    nombre = `<h2>${nombre}</h2>`; //se inserta el nombre dado
    modelo = `<h3>${modelo}</h3>`; // se inserta el modelo dado
    precio = `<p>Precio: <b>$${precio}</b></p>` // se inserta el precio dado
    return [img,nombre,modelo,precio]; // lo que va a retornar en la pantalla
}
let documentFragment = document.createDocumentFragment() 

for (var i = 1; i <= 20; i++){ // para que la funcion se realice 20 veces
    let modeloRandom = Math.round(Math.random()*10000) //para que el modelo tenga numeros random
    let precioRandom = Math.round(Math.random()*10+30) //para que el precio tenga numeros random
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom) //se crea una variable para llamar a la funcion (asi es mas sencillo)
    let div = document.createElement("DIV") //se crea el elemento <div> y se le pone nombre con la variable
    div.classList.add(`item-${i}`,`flex-item`) // se crea la lista del <div> y se agrega el item 20 veces colocandole clase
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]; 
    documentFragment.appendChild(div)
    
}

contenedor.appendChild(documentFragment)