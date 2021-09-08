//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE=SERVIDOR DE SPOTIFY
let uri="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us";

let token="Bearer BQDu6oZF3ecSxBLNApr0Dj4r5-_V-qr8AwLN0RoMjDpTkWf12u6H_gHY9Af80hUL-BEnE8EC_X_gjJLv96e-y-tq_y6G5N9-e5UG94jyL3U7BUfHrSNSpaMtkyxx1X_1-zoxFnqzViufqD5FM9M";

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