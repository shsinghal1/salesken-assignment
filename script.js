

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lightgrey',
    progressColor: 'brown',
    barHeight: 7,
    height: 178,
    barMinHeight: 4,
    barGap: 4,
    barWidth: 3,
    responsive: 'true',
    normalize: 'true',
});

const btn = document.getElementById('btn');
document.getElementById('btn').addEventListener('click', () => {
   
   const symbol1 =  document.querySelector('button>i');

     if(symbol1.classList.contains('fa-play') ){
        symbol1.classList.remove('fa-play');
         symbol1.classList.add('fa-pause');
     }
     else{
        symbol1.classList.remove('fa-pause');
        symbol1.classList.add('fa-play');
     }

    wavesurfer.playPause();
});

wavesurfer.load('https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Perfect%20.mp3')
