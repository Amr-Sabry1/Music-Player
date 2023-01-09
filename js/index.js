let isPlaying = false
var myaudio = document.getElementById("myAudio");

let allSong = [{
    songName: "Amira",
    singerName: "Wegz",
    src: './playList/Wegz X _ashmusicofficial  - Amira (Official Audio) _ ويجز و آش - أميره(MP3_128K).mp3',
    imgSrc: './images/1.jpeg'

}, {
    songName: "when the partys over",
    singerName: "Billie Eilish",
    src: './playList/Billie Eilish - when the party_s over(MP3_128K).mp3',
    imgSrc: './images/5.webp'

}, {
    songName: "SAD",
    singerName: "XXXTENTACION",
    src: './playList/XXXTENTACION - SAD_(MP3_128K).mp3',
    imgSrc: './images/2.jpeg'

}, {
    songName: "changes",
    singerName: "XXXTENTACION",
    src: './playList/XXXTENTACION - changes(MP3_128K).mp3',
    imgSrc: './images/9.jpeg'

}, {
    songName: "lovely",
    singerName: "Billie Eilish,Khalid",
    src: './playList/Billie Eilish_ Khalid - lovely(MP3_128K).mp3',
    imgSrc: './images/4.jpeg'

}, {
    songName: "Basrah w Atoh",
    singerName: "Cairokee",
    src: './playList/Cairokee - Basrah w Atoh كايروكي - بسرح واتوه(M4A_128K).m4a',
    imgSrc: './images/5.webp'

}, {
    songName: "ElBakht",
    singerName: "Wegz",
    src: './playList/Wegz - ElBakht _ ويجز - البخت (Audio) prod. Rahal(MP3_128K).mp3',
    imgSrc: './images/6.jpeg'

}, {
    songName: "Roma",
    singerName: "Cairokee",
    src: './playList/Cairokee - Roma كايروكي - روما(M4A_128K).m4a',
    imgSrc: './images/7.jpeg'

}, {
    songName: "Ezz Al Arab",
    singerName: "Wegz",
    src: './playList/Ezz Al Arab  - Wegz (Music from FIFA World Cup Qatar 2022)(M4A_128K).m4a',
    imgSrc: './images/8.jpeg'

}, {
    songName: "Fady Shewaya",
    singerName: "Hamza Namira",
    src: './playList/Hamza_Namira_-_Fady_Shewaya___حمزة_نمرة_-_فاضي_شوية(128k).m4a',
    imgSrc: './images/8.webp'

}, {
    songName: "Hold me",
    singerName: "UnKnowon",
    src: './playList/hold me close till I get up time is barely on our side--(M4A_128K).m4a',
    imgSrc: './images/9.jpeg'

}, {
    songName: "Wiggle",
    singerName: "Jason Derulo",
    src: './playList/Jason_Derulo_-_Wiggle_(Lyrics)_Ft._Snoop_Dogg(128k).mp3',
    imgSrc: './images/10.webp'

}, {
    songName: "Despacito",
    singerName: "Justin_Bieber",
    src: './playList/Justin_Bieber_–_Despacito_(Lyrics)_🎤_ft._Luis_Fonsi_&_Daddy_Yankee_[Pop](128k).m4a',
    imgSrc: './images/1.jpeg'

}, {
    songName: "Betadeen",
    singerName: "Lege-Cy",
    src: './playList/Lege-Cy_-_Betadeen___ليجي-سي_-_بيتادين_(Official_Audio)(128k).m4a',
    imgSrc: './images/2.jpeg'

}, {
    songName: "Aleb Fel Dafater",
    singerName: "MUSliM",
    src: './playList/MUSliM - Aleb Fel Dafater _ Official Music Video - 2022 _ مسلم - قلب فى الدفاتر(M4A_128K).m4a',
    imgSrc: './images/4.jpeg'

}, {
    songName: "Ghasb Anny",
    singerName: "MUSliM ,Zap Tharwat",
    src: './playList/MUSliM _ Zap Tharwat Ft. Sary Hany - Ghasb Anny _ مُسلم و زاب ثروت مع ساري هاني - غصب عني(M4A_128K).m4a',
    imgSrc: './images/5.webp'

}, {
    songName: "Malaky",
    singerName: "Siilawy",
    src: './playList/Siilawy - ملاكي  (prod.Raspo)(M4A_128K).m4a',
    imgSrc: './images/7.jpeg'

}, {
    songName: "Weanek",
    singerName: "Siilawy",
    src: './playList/Siilawy - وينك ( prod.Raspo )(M4A_128K).m4a',
    imgSrc: './images/8.jpeg'

}, {
    songName: "True Love",
    singerName: "XXXTENTACION",
    src: './playList/XXXTENTACION _ YE - True Love (Official Audio)(MP3_128K).mp3',
    imgSrc: './images/8.webp'

}]

let currentIndex = 0
$("#myAudio").attr("src", `${allSong[currentIndex].src}`);
$(".singerName").text(`${allSong[currentIndex].singerName}`);
$(".songName").text(`${allSong[currentIndex].songName}`);
$("img").attr("src", `${allSong[currentIndex].imgSrc}`);

$(".next").click(function() {
    if (currentIndex == allSong.length) {
        currentIndex = 0
    } else {
        currentIndex += 1
    }

    playAudio(currentIndex)
})


$(".previuos").click(function() {
    if (currentIndex == 0) {
        currentIndex = allSong.length
    } else {
        currentIndex -= 1
    }
    playAudio(currentIndex)
})

$('.play').click(function() {
    isPlaying ? pauseAudio() : playAudio(currentIndex)
});



function playAudio(currentIndex) {
    $("#myAudio").attr("src", `${allSong[currentIndex].src}`);
    $(".singerName").text(`${allSong[currentIndex].singerName}`);
    $(".songName").text(`${allSong[currentIndex].songName}`);
    $("img").attr("src", `${allSong[currentIndex].imgSrc}`);

    myaudio.play();
    $('.play i').removeClass("fa fa-play");
    $('.play i').addClass('fa-solid fa-pause');
    isPlaying = true
}

function pauseAudio() {
    myaudio.pause();
    $('.play i').addClass("fa fa-play");
    $('.play i').removeClass('fa-solid fa-pause');
    isPlaying = false
}


let myAudio = document.getElementById("myAudio")
myAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime
    $('.currTime').text(format(currentTime))
    const duration = e.target.duration
    $('.maxTime').text(format(duration))
    let progressWidth = (currentTime / duration) * 100
    $('.progress').css("width", `${progressWidth}%`);
    if (currentTime == duration) {
        playAudio(currentIndex += 1)
    }

})

function format(time) {
    if (time && !isNaN(time)) {
        const min = Math.floor(time / 60) < 10 ? `0${Math.floor(time/60)}` : Math.floor(time / 60);
        const ss = Math.floor(time % 60) < 10 ? `0${Math.floor(time%60)}` : Math.floor(time % 60)
        return `${min}:${ss}`

    }
    return '00:00'

}


$(".random").click(function() {
    let y = $('.random i').attr("class")

    switch (y) {
        case 'fa-solid fa-shuffle':
            $(".random i").attr('class', "fa-solid fa-repeat")
            break;
        case 'fa-solid fa-repeat':
            $(".random i").attr('class', "fa-solid fa-shuffle")
            break;

    }
})


let progressArea = document.getElementById('progressArea')

progressArea.addEventListener('click', (e) => {
    let progwidth = progressArea.clientWidth
    let ofsset = e.offsetX
    let songduration = myAudio.duration
    myAudio.currentTime = (ofsset / progwidth) * songduration
})


$(".menu").click(function() {
    $(".songList").animate({ top: `0` }, 600);
    let cartona = ''
    for (let i = 0; i < allSong.length; i++) {

        cartona += ` <div class="song py-2 mx-2" onClick='playsong(${i})'>
                            <p class="mb-0"> <span><i class="fa fa-play mx-3"></i></span> ${allSong[i].singerName} - ${allSong[i].songName}</p>
                        </div>`;
    }
    document.getElementById('songs').innerHTML = cartona
});


$('.xmark').click(function() {
    $(".songList").animate({ top: `100%` }, 500);

})

function playsong(index) {
    playAudio(index)

    $(".songList").animate({ top: `100%` }, 500);
}








$(document).ready(function() {
    $(".loader").fadeOut(1000, function() {
        $(".spiner").fadeOut(1000)
        $("body").css("overflow", "auto")
    });

})