
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let playgif = document.getElementById("playgif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');


let songs =[
    {songName: "Warrio - Mortels", filePath : "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ceilp - Huma Huma", filePath : "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deaf kev -  Invincible", filePath : "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven and Ehide - My heart", filePath : "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji - Heroes - tonight", filePath : "songs/5.mp3", coverPath: "covers/5.jpg"}
]


songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-circle-play');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-circle-pause');
        playgif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-circle-play');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-circle-pause');
        playgif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;

})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        playgif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }
    console.log(songIndex);
    makeAllPlays();
    songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-circle-play');
    songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playgif.style.opacity = 1;
})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex  = songIndex - 1;
    }
    console.log(songIndex);
    makeAllPlays();
    songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-circle-play');
    songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playgif.style.opacity = 1;
})