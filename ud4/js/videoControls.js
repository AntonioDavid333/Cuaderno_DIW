let reiniciar = document.getElementById("reiniciar");
let retrasar = document.getElementById("retrasar");
let play = document.getElementById("play");
let adelantar = document.getElementById("adelantar");
let silenciar = document.getElementById("silenciar");
let menosVolumen = document.getElementById("menosVolumen");
let masVolumen = document.getElementById("masVolumen");
let video = document.getElementById("medio");

reiniciar.addEventListener("click", () => {
    video.currentTime = 0;
});

retrasar.addEventListener("click", () => {
    video.currentTime -= 5;
});     
play.addEventListener("click", () => {
    if(!video.paused && !video.ended){
        video.pause()
        play.value="▶️"
    }else{
        video.play()
        play.value='⏸️'
    }
    
    
});

adelantar.addEventListener("click", () => {
    video.currentTime += 5;
});

silenciar.addEventListener("click", () => {
    video.muted = !video.muted;
    silenciar.value = video.muted ? "escuchar" : "silenciar";
}
);
menosVolumen.addEventListener("click", () => {

    if (video.volume > 0.1) {
        video.volume -= 0.1;
    }
});

masVolumen.addEventListener("click", () => {
    if (video.volume < 0.9) {
        video.volume += 0.1;
    }
}); 
