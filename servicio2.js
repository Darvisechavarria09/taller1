let uri="https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=4dc4a96eb1914d048cb5c8d8b29b5e0a";
let dato3="client_secret=7792f20853b948aab0ee8bce5b7473b4";

let parametrosPOST={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:`${dato1}&${dato2}&${dato3}`
}

fetch(uri,parametrosPOST)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    obtenerToken(respuesta);
})
.catch(function(error){
    console.log(error)
})

function obtenerToken(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token;
    obtenerCanciones(token);
}

function obtenerCanciones(token){
    let uri="https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/top-tracks?market=us";

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
    })
    .catch(function(error){
        console.log(error)
    })
}

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

        let nombre=document.createElement("h5")
        nombre.classList.add("card-title","text-center")
        nombre.textContent=cancion.name;

        let audio=document.createElement("audio")
        audio.classList.add("w100")
        audio.src=cancion.preview_url;
        audio.setAttribute("controls","controls");

        

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        

    })
}
