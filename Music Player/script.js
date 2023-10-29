let progress = document.getElementById('progress');
let song = document.getElementById('song');
let playBtn = document.getElementById('playBtn');
let playCtrl = document.querySelector('.play');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

playCtrl.addEventListener('click', ()=>{
    if(playBtn.classList.contains('fa-pause')){ //for pause button
        song.pause(); //stop song
        playBtn.classList.remove('fa-pause'); //remove pause classList
        playBtn.classList.add('fa-play'); //add play classList
    }
    else{ //for play button
        song.play(); //play song
        playBtn.classList.add('fa-pause'); //add pause classList
        playBtn.classList.remove('fa-play'); //remove play classList
    }
})

if(song.play()){ //if song is playing
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove('fa-play'); //remove play classList
    playBtn.classList.add('fa-pause'); //add pause classList
}