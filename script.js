const scrollContainer = document.querySelector('.scroll');
function cloneImages() {
  const photos = scrollContainer.innerHTML; 
  scrollContainer.innerHTML += photos;
}

function handleScroll() {
  if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
    scrollContainer.scrollTop = 0;
  }
}

cloneImages();
scrollContainer.addEventListener('scroll', handleScroll);




// Primer conjunto de controles para la primera canción
const playPauseBtn1 = document.getElementById('playPauseBtn1');
const audioPlayer1 = document.getElementById('audioPlayer1');
const progress1 = document.getElementById('progress1');

// Función para play y pause de la primera canción
playPauseBtn1.addEventListener('click', function() {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
    playPauseBtn1.textContent = 'Pause';
  } else {
    audioPlayer1.pause();
    playPauseBtn1.textContent = 'Play';
  }
});

// Actualizar la barra de progreso de la primera canción
audioPlayer1.addEventListener('timeupdate', function() {
  const progressValue1 = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
  progress1.value = progressValue1;
});

// Permitir que la barra de progreso cambie la canción de la primera canción
progress1.addEventListener('input', function() {
  const newTime1 = (progress1.value / 100) * audioPlayer1.duration;
  audioPlayer1.currentTime = newTime1;
});


// Segundo conjunto de controles para la segunda canción
const playPauseBtn2 = document.getElementById('playPauseBtn2');
const audioPlayer2 = document.getElementById('audioPlayer2');
const progress2 = document.getElementById('progress2');

// Función para play y pause de la segunda canción
playPauseBtn2.addEventListener('click', function() {
  if (audioPlayer2.paused) {
    audioPlayer2.play();
    playPauseBtn2.textContent = 'Pause';
  } else {
    audioPlayer2.pause();
    playPauseBtn2.textContent = 'Play';
  }
});

// Actualizar la barra de progreso de la segunda canción
audioPlayer2.addEventListener('timeupdate', function() {
  const progressValue2 = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
  progress2.value = progressValue2;
});

// Permitir que la barra de progreso cambie la canción de la segunda canción
progress2.addEventListener('input', function() {
  const newTime2 = (progress2.value / 100) * audioPlayer2.duration;
  audioPlayer2.currentTime = newTime2;
});

// Permitir que la barra de progreso cambie la canción
progress.addEventListener('input', function() {
  const newTime = (progress.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
});