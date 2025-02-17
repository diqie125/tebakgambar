const images = [
    { src: 'padang.jpeg', name: 'Padang' },
    { src: 'radakh.webp', name: 'Radakh' },
    { src: 'rumah_bolon.webp', name: 'Rumah Bolon' },
    { src: 'rumah_gadang.webp', name: 'Rumah Gadang' },
    { src: 'rumah_betang.webp', name: 'Rumah Betang' }
  ];
  
  let currentImageIndex = 0;
  const gameImage = document.getElementById('game-image');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit-btn');
  const randomizeButton = document.getElementById('randomize-btn');
  const resultText = document.getElementById('result');
  
  // Fungsi untuk memilih gambar secara acak
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  function showNextImage() {
    const randomImage = getRandomImage();
    gameImage.src = randomImage.src;
    gameImage.alt = randomImage.name;
    gameImage.classList.remove('hidden'); // Menampilkan gambar
  }
  
  function randomizeImage() {
    const randomImage = getRandomImage();
    gameImage.src = randomImage.src;
    gameImage.alt = randomImage.name;
  }
  
  submitButton.addEventListener('click', function() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = gameImage.alt.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      resultText.textContent = 'Jawaban Anda benar!';
      resultText.classList.add('text-green-500');
      resultText.classList.remove('text-red-500');
      answerInput.value = '';
      showNextImage(); // Menampilkan gambar berikutnya setelah jawaban benar
      randomizeButton.classList.add('hidden'); // Sembunyikan tombol acak gambar setelah jawaban benar
    } else {
      resultText.textContent = 'Jawaban Anda salah, coba lagi!';
      resultText.classList.add('text-red-500');
      resultText.classList.remove('text-green-500');
      randomizeButton.classList.remove('hidden'); // Menampilkan tombol acak gambar jika salah
    }
  });
  
  // Tombol acak gambar jika jawaban salah
  randomizeButton.addEventListener('click', randomizeImage);
  
  // Menampilkan gambar pertama secara acak saat halaman dimuat
  window.onload = showNextImage;
  