//elementlere js uzerinden ulasmak
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById('next')
const repeatButton = document.getElementById('repeat')
const shuffleButton = document.getElementById('shuffle')
const audio = document.getElementById('audio')
const songImage = document.getElementById('song-image')
const songName = document.getElementById('song-name')
const songArtist = document.getElementById('song-artist')
const pauseButton = document.getElementById('pause')
const playButton = document.getElementById('play')
const playListButton = document.getElementById('playlist')


const maxDuration = document.getElementById('max-duration')
const currentTimeRef = document.getElementById('current-time')

const progressBar = document.getElementById('progress-bar')
const playListContainer = document.getElementById('playlist-container')
const closeButton = document.getElementById('close-button')
const playListSongs = document.getElementById('playlist-songs')

const currentProgress = document.getElementById('current-progress')


//sira
let index

//dongu
let loop = true

//sarki listesi
const songsList = [
    {
        name: "Gelo Ew Ki Bu",
        link: "assets/gelo-ew-ki-bu.mp3",
        artist: "Aram Tigran",
        image: "assets/aram-tigran.jpeg"
    },
    {
        name: "Gitme Kal",
        link: "assets/yara-bere-icindeyim.mp3",
        artist: "Hira-i Zerdust",
        image: "assets/hirai.jpeg"
    },
    {
        name: "Aramam",
        link: "assets/aramam.mp3",
        artist: "Ibrahim Tatlises",
        image: "assets/ibrahim-tatlises.jpeg"
    },
    {
        name: "Ax Eman",
        link: "assets/ax-eman.mp3",
        artist: "Rewsan Celiker",
        image: "assets/rewsan-celiker.jpeg"
    },
    {
        name: "Dinle",
        link: "assets/dinle.mp3",
        artist: "Mahsun Kirmizigul",
        image: "assets/mahsun.jpeg"
    }
]

//zaman formatlayici
const timeFormatter = (timeInput) => {
    let minute = Math.floor(timeInput / 60)
    minute = minute < 10 ? "0"+minute : minute
    let second = Math.floor(timeInput % 60)
    second = second < 10 ? "0"+second : second
    return `${minute}:${second}` 
}

//sarkiyi ata
const setSong = (arrayIndex) => {

    let {name, link, artist ,image} = songsList[arrayIndex]

    audio.src = link
    songName.innerHTML = name
    songArtist.innerHTML = artist
    songImage.src = image

    //oynat
    playAudio()

    audio.onloadeddata = () =>{
        maxDuration.innerText = timeFormatter(audio.duration)
    }

    playListContainer.classList.add("hide")
}

//audio dinleyici
audio.addEventListener("timeupdate",()=>{
    currentTimeRef.innerText = timeFormatter(audio.currentTime)
    let value = ((audio.currentTime) / audio.duration.toFixed(3)) * 100 + "%"
    currentProgress.style.width = value
})

//sarkiyi oynat
const playAudio = () =>{
    audio.play()

    playButton.classList.add("hide")
    pauseButton.classList.remove("hide")
}

//sarkiyi durdur
const pauseAudio = () =>{
    audio.pause()

    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
}


//siradaki sarkiya git
const nextSong = () =>{
    if (loop) {
        
        if (index == (songsList.length - 1)) {
            index = 0
        } else {
            index = index + 1
        }

    } else {
        let randIndex = Math.floor(Math.random()* songsList.length)
        index = randIndex

    }

    setSong(index)
}

//onceki sakriyi calistir
const previousSong = () =>{
    if (index > 0) {
        index = index - 1
    } else {
        index = songsList.length - 1
    }
    setSong(index)
}

//dongu butonuna tiklanirsa
repeatButton.addEventListener("click",()=>{
    if (repeatButton.classList.contains("active")) {
        repeatButton.classList.remove("active")
        loop = false
    } else {
        repeatButton.classList.add("active")
        loop = true
    }
})

//karistirici butonuna tiklanirsa
shuffleButton.addEventListener("click",()=>{
    if (shuffleButton.classList.contains("active")) {
        shuffleButton.classList.remove("active")
        loop = true
    } else {
        shuffleButton.classList.add("active")
        loop = false
    }
})

//tiklanma olursa
progressBar.addEventListener("click",(event)=>{
    //baslangic

    let coordStart = progressBar.getBoundingClientRect().left
    console.log(coordStart)

    let coordEnd = event.clientX
     console.log(coordEnd)

    let progress = (coordEnd - coordStart) / progressBar.offsetWidth

        console.log(progress)
    currentProgress.style.width = progress * 100 + "%"
    audio.currentTime = progress * audio.duration

    playAudio()
})

//playlist butona tiklanilirsa
playListButton.addEventListener("click",()=>{
    playListContainer.classList.remove("hide")
})

//kapata tiklanilirsa
closeButton.addEventListener("click",()=>{
    playListContainer.classList.add("hide")
})

//sarki listesi olustur
const initializePlaylist = () =>{
    for (const i in songsList) {
        
        playListSongs.innerHTML +=
        `<li class="playlistSong"
            onclick="setSong(${i})">
                <div class="playlist-image-container">
                    <img src="${songsList[i].image}" />
                </div>
                <div class="playlist-song-details">
                    <span id="playlist-song-name">
                        ${songsList[i].name}
                    </span>
                    <span id="playlist-song-artist-album">
                        ${songsList[i].artist}
                    </span>
                </div>
            </li> `
    }
}


//oynat
playButton.addEventListener("click",playAudio)

//durdur button
pauseButton.addEventListener("click",pauseAudio)

//siradaki button
nextButton.addEventListener("click", nextSong)

//onceki sakri
prevButton.addEventListener("click", previousSong)


//ekran yuklenidliginde
window.onload = () =>{
    index = 0
    setSong(index)
    pauseAudio()
    initializePlaylist()
}