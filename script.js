const loveNotes = [
    "You’re the smile I didn’t know I was missing.",
    "Every second with you feels like a poem being written.",
    "You make ordinary moments feel magical.",
    "If I could write your name in the stars, I would — every night.",
    "With you, love feels easy. Natural. Home."
  ];
  
  function showLoveNote() {
    const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById("loveNote").textContent = note;
  }
  
  // Slideshow
  const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

showSlide(current);

  
  function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
  
    if (audio.paused) {
      audio.play();
      btn.textContent = "Pause Music 🔇";
    } else {
      audio.pause();
      btn.textContent = "Play Music 🎵";
    }
  }
  