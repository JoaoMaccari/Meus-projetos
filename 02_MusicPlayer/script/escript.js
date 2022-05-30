let curr_track = document.getElementById("audio");
let track = Number(0) 


setInterval(function(){
    changeBackground()
},2000)


function changeBackground() {
let lista_imagens = [
    {
        url: "url('/02_MusicPlayer/img/gits-1.jpg')"
    },

    {
        url: "url('/02_MusicPlayer/img/gits-2.jpg')"
    },

    {
        url: "url('/02_MusicPlayer/img/gits-3.jpg')"
    }
]

    let randon_image = Math.floor(Math.random() * lista_imagens.length  );
    document.body.style.backgroundImage = lista_imagens[randon_image].url

    console.log(lista_imagens[randon_image]);
}


let lista = [
    {
        src: "./assets/Enjoy-the-silence.mp4"

    },

    {
        src: "./assets/identity.mp4"
    },

    {
        src: "./assets/Making-of-Cyborg.mp4"
    },

    {
        src: "./assets/video.mp4"
    }

 ]



 function render(index) {
     console.log(index);
    curr_track.setAttribute("src", lista[index].src )
    
}


function playPause() {

    
    let stat = curr_track.getAttribute("status");
    let btn_playPause = document.getElementById("play_pause");

    if (stat == "play") {

        btn_playPause.setAttribute("src", "./icones/pause.png")
        curr_track.setAttribute("status", "pause")
        curr_track.play();

    }

    if (stat == "pause") {
        btn_playPause.setAttribute("src", "./icones/play.png")
        curr_track.setAttribute("status", "play");
        curr_track.pause();
    } 

    
}

document.getElementById("next").addEventListener("click", () =>{
    track++
    if (track>3) {
        track = 0
    }
    render(track)
})

document.getElementById("previous").addEventListener("click", () =>{
    track--
    if (track< 0) {
        track = 3
    }
    render(track)
})

