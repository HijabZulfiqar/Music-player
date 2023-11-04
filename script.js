const data = [
  {
    img: "images/cover-1.png",
    title: "Lost in the City Lights",
    lowtitle: "Cosmo Sheldrake",
    audio: "images/forest-lullaby-110624.mp3"
  },
  {
    img: "images/cover-2.png",
    title: "Forest Lullaby",
    lowtitle: "Lesfm",
    audio:"images/lost-in-city-lights-145038.mp3"
  }
];

const card = document.getElementById('card');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');
const audio=document.getElementById('audio')
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

let currentIndex = 0; // Initialize the index to 0
let isPlaying = false;
// Function to render the current item at the given index
function render() {
  const currentItem = data[currentIndex];
  songTitle.textContent = currentItem.title;
  artistName.textContent = currentItem.lowtitle;
  // You can also set the image source if needed:
   const albumImage = document.getElementById('alb-img');
   albumImage.src = currentItem.img;
   audio.src = currentItem.audio;
   if (isPlaying) {
    audio.play();
  }
}

// Initial render when the page loads
render();

// Button click event to show the next item
next.addEventListener('click', function () {
  currentIndex = (currentIndex + 1);  // Update the index for the next item
  isPlaying = true;
  render(); // Render the next item % data.length
});

prev.addEventListener('click', function () {
  currentIndex = (currentIndex -1) ; // Update the index for the next item
  isPlaying = true;
  render(); // Render the next item % data.length
});
play.addEventListener('click', function () {
  if (isPlaying) {
    // If it's playing, pause the audio and set isPlaying to false
    audio.pause();
    isPlaying = false;
  } else {
    // If it's not playing, start the audio and set isPlaying to true
    audio.play();
    isPlaying = true;
  }
});
audio.addEventListener('timeupdate', function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
});
progressContainer.addEventListener('click', function (e) {
  const clickX = e.offsetX;
  const containerWidth = progressContainer.clientWidth;
  const duration = audio.duration;
  const currentTime = (clickX / containerWidth) * duration;
  audio.currentTime = currentTime;
});