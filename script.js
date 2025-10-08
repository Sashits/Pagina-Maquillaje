let listaProductos = document.querySelector('.listaProductos')


fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(respuesta => respuesta.json())
.then(productos => {
    for (let index = 0; index < 4; index++) {
        console.log(`El prodcuto es: ${productos[index].name}`)
        listaProductos.innerHTML += `El prodcuto es: ${productos[index].name}`
   
    }
   
})
