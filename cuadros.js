

let parrafo =document.getElementById("par1")
parrafo.innerHTML +="<div>elije tu cuadro</div>"

let parrafoCreado= document.createElement("p")
parrafoCreado.innerText = "Este es un cuadro agregado por jS"

parrafoCreado.id ="parrafoCreado"
document.body.appendChild(parrafoCreado)

class Pinturas{
    constructor(id, nombre, artista,tecnica, medidas,precio){
        this.id =id
        this.nombre = nombre
        this.artista = artista
        this.tecnica = tecnica
        this.medidas = medidas
        this.precio = precio
    }
    }
const pintura1 = new Pinturas(1, "Entre congojas y lamentos ","Cinara","Óleo sobre lienzo","30 x 30",5000)
const pintura2 = new Pinturas(2,"El muro de los lamentos  ","Cinara","Lápiz y carbonilla sobre cartón","100 x 70",9000)
const pintura3 = new Pinturas(3,"Odio gratuito entre hermanos  ","Cinara","Óleo sobre lienzo","50 x 70",8000)
const pintura4 = new Pinturas(4, "El sonido del silencio ","Cinara","Mixta sobre lienzo","60 x 70",7500)

let pinturas =[pintura1, pintura2, pintura3, pintura4]
let divpintura=document.getElementById("divpintura")


pinturas.forEach(pinturasenArray => {
    divpintura.innerHTML +=`
    <div class="card pinturaArray" id="pintura${pinturasenArray.id}" style="width:18rem;margin: 1rem;">
  
  <div class="card-body">
    <h5 class="card-title">Nombre : ${pinturasenArray.nombre}</h5>
    <p class="card-text">Artista : ${pinturasenArray.artista}</p>
    <p class="card-text">Tecnica : ${pinturasenArray.tecnica}</p>
    <p class="card-text">Medidas : ${pinturasenArray.medidas}</p>
    <p class="card-text">Precio :US$ ${pinturasenArray.precio}</p>
    
  </div>
</div>

    `
})