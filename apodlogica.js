let entrada = document.getElementById("data")

var btn = document.getElementById ("enviar")

let img =  document.getElementById("imagem")

let vdo = document.getElementById("video")

let pedido = new XMLHttpRequest ()

    pedido.open ('GET', 'https://api.nasa.gov/planetary/apod?api_key=YKwL7dONBccztOGJD89J7m5B2k0fMFwJ2j5nLsAu')

    pedido.onload = function () {
        let resposta = JSON.parse (this.responseText)
        entrada.setAttribute("max", resposta.date)
        img.innerHTML = `<img src="${resposta.url}"> `
        document.getElementById("titulo").innerHTML= resposta.title
        document.getElementById("texto").innerHTML= resposta.explanation
     console.log (resposta)
     
     if (resposta.media_type != "video"){
        img.setAttribute("src", resposta.url)
        img.style.display= "flex"
        vdo.style.display= "none"
        console.log (resposta)
    }
    else {
        video.setAttribute("src",resposta.url)
        img.style.display = "none"
        vdo.style.display = "flex"
        console.log (resposta)
    }

    } 

    pedido.send ()

btn.addEventListener("click", function() {
    let pedido = new XMLHttpRequest ()

    pedido.open ('GET', `https://api.nasa.gov/planetary/apod?api_key=YKwL7dONBccztOGJD89J7m5B2k0fMFwJ2j5nLsAu&date=${data.value}`)

    pedido.onload = function () {
        var resposta = JSON.parse (this.responseText)
        img.innerHTML = `<img src="${resposta.url}"> `
        document.getElementById("titulo").innerHTML= resposta.title
        document.getElementById("texto").innerHTML= resposta.explanation
        vdo.setAttribute("src",resposta.url)
        

        if (resposta.media_type != "video"){
            img.setAttribute("src", resposta.url)
            img.style.display= "flex"
            vdo.style.display= "none"
            console.log (resposta)
        }
        else {
            video.setAttribute("src",resposta.url)
            img.style.display = "none"
            vdo.style.display = "flex"
            console.log (resposta)
        }
    } 

    pedido.send ()
})