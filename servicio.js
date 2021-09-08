//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE=SERVIDOR DE SPOTIFY
let uri="https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/top-tracks?market=us";

let token="Bearer BQB0j4SZbInrEyu-EO16HfyNA5T-pX8K99sAnlxbRzSWim3-J1sJfCsmb-lLobebGgf5MoBF3zQXe01KtUYe6gknQtWhhmyAxdCw09yRWCfZT0nMx-Za3KsJTodxOMjVPUg9sur2XOQusCZnhsJAVI5G4sdblf7ZcSM";

let parametrosEnvio={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
    /*console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].album.images[0])
    console.log(respuesta.tracks[0].album.images[0].url)*/
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")

    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear un div con js
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo un div que sirve de tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //creo una img de tarjeta
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        

    })

}