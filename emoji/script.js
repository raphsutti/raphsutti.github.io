const WORDS_DATA = [
  // Easy
  { word: "Play", difficulty: "Easy", emoji: "🪀" },
  { word: "Park", difficulty: "Easy", emoji: "🛝" },
  { word: "Book", difficulty: "Easy", emoji: "📖" },
  { word: "Swim", difficulty: "Easy", emoji: "🏊" },
  { word: "Blue", difficulty: "Easy", emoji: "🟦" },
  { word: "Bike", difficulty: "Easy", emoji: "🚲" },
  { word: "Draw", difficulty: "Easy", emoji: "🎨" },
  { word: "Read", difficulty: "Easy", emoji: "📚" },
  { word: "Game", difficulty: "Easy", emoji: "🎮" },
  { word: "Song", difficulty: "Easy", emoji: "🎵" },
  { word: "Sun", difficulty: "Easy", emoji: "☀️" },
  { word: "Dog", difficulty: "Easy", emoji: "🐶" },
  { word: "Cat", difficulty: "Easy", emoji: "🐱" },
  { word: "Ball", difficulty: "Easy", emoji: "⚽" },
  { word: "Tree", difficulty: "Easy", emoji: "🌳" },
  { word: "Star", difficulty: "Easy", emoji: "⭐️" },
  { word: "Fish", difficulty: "Easy", emoji: "🐟" },
  { word: "Cake", difficulty: "Easy", emoji: "🎂" },
  { word: "Milk", difficulty: "Easy", emoji: "🥛" },
  { word: "Shoe", difficulty: "Easy", emoji: "👟" },

  // Medium
  { word: "School", difficulty: "Medium", emoji: "🏫" },
  { word: "Friend", difficulty: "Medium", emoji: "👫" },
  { word: "Recess", difficulty: "Medium", emoji: "⚽" },
  { word: "Teacher", difficulty: "Medium", emoji: "🧑‍🏫" },
  { word: "Seesaw", difficulty: "Medium", emoji: "🪵" },
  { word: "Monkey", difficulty: "Medium", emoji: "🐒" },
  { word: "Crayon", difficulty: "Medium", emoji: "🖍️" },
  { word: "Story", difficulty: "Medium", emoji: "📑" },
  { word: "Yellow", difficulty: "Medium", emoji: "🟨" },
  { word: "Pencil", difficulty: "Medium", emoji: "✏️" },
  { word: "Apple", difficulty: "Medium", emoji: "🍎" },
  { word: "Sister", difficulty: "Medium", emoji: "👧" },
  { word: "Brother", difficulty: "Medium", emoji: "👦" },
  { word: "Garden", difficulty: "Medium", emoji: "🪴" },
  { word: "Summer", difficulty: "Medium", emoji: "☀️" },
  { word: "Animal", difficulty: "Medium", emoji: "🦁" },
  { word: "Family", difficulty: "Medium", emoji: "👨‍👩‍👧‍👦" },
  { word: "Rocket", difficulty: "Medium", emoji: "🚀" },
  { word: "Window", difficulty: "Medium", emoji: "🪟" },
  { word: "Puzzle", difficulty: "Medium", emoji: "🧩" },

  // Hard
  { word: "Playground", difficulty: "Hard", emoji: "🏰" },
  { word: "Dinosaur", difficulty: "Hard", emoji: "🦖" },
  { word: "Kindergarten", difficulty: "Hard", emoji: "🎒" },
  { word: "Trampoline", difficulty: "Hard", emoji: "🤸" },
  { word: "Principal", difficulty: "Hard", emoji: "👔" },
  { word: "Library", difficulty: "Hard", emoji: "🏛️" },
  { word: "Whiteboard", difficulty: "Hard", emoji: "🖊️" },
  { word: "Watermelon", difficulty: "Hard", emoji: "🍉" },
  { word: "Helicopter", difficulty: "Hard", emoji: "🚁" },
  { word: "Homework", difficulty: "Hard", emoji: "📝" },
  { word: "Butterfly", difficulty: "Hard", emoji: "🦋" },
  { word: "Astronaut", difficulty: "Hard", emoji: "🧑‍🚀" },
  { word: "Adventure", difficulty: "Hard", emoji: "🗺️" },
  { word: "Sunflower", difficulty: "Hard", emoji: "🌻" },
  { word: "Caterpillar", difficulty: "Hard", emoji: "🐛" },
  { word: "Ice Cream", difficulty: "Hard", emoji: "🍦" },
  { word: "Basketball", difficulty: "Hard", emoji: "🏀" },
  { word: "Supermarket", difficulty: "Hard", emoji: "🛒" },
  { word: "Microphone", difficulty: "Hard", emoji: "🎤" },
  { word: "Thermometer", difficulty: "Hard", emoji: "🌡️" }
];

let currentWordObj = null;
let revealedIndices = new Set();
let isPhaseTwo = false;

// DOM Elements
const emojiDisplay = document.getElementById('emoji-display');
const wordDisplay = document.getElementById('word-display');
const revealFirstBtn = document.getElementById('reveal-first-btn');
const revealRandomBtn = document.getElementById('reveal-random-btn');
const revealAnswerBtn = document.getElementById('reveal-answer-btn');
const nextBtn = document.getElementById('next-btn');
const difficultySelect = document.getElementById('difficulty-select');
const difficultyBadge = document.getElementById('difficulty-badge');

function getFilteredPool() {
  const selectedDifficulty = difficultySelect.value;
  if (selectedDifficulty === 'All') {
    return [...WORDS_DATA];
  }
  return WORDS_DATA.filter(item => item.difficulty === selectedDifficulty);
}

function getRandomWord() {
  const pool = getFilteredPool();
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function updateBadge(difficulty) {
  difficultyBadge.textContent = difficulty;
  difficultyBadge.className = `difficulty-badge ${difficulty.toLowerCase()}`;
}

function renderWord() {
  const word = currentWordObj.word.toUpperCase();
  const displayChars = word.split('').map((char, index) => {
    if (char === ' ') return ' ';
    return revealedIndices.has(index) ? char : '_';
  });

  wordDisplay.textContent = displayChars.join(' ');
  updateButtonVisibility();
}

function updateButtonVisibility() {
  const word = currentWordObj.word.toUpperCase();
  const hiddenCount = word.split('').filter((char, idx) => char !== ' ' && !revealedIndices.has(idx)).length;

  if (!isPhaseTwo) {
    // Phase 1
    revealFirstBtn.style.display = 'block';
    revealRandomBtn.style.display = 'none';
    revealAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    // Phase 2
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = hiddenCount > 0 ? 'block' : 'none';
    revealAnswerBtn.style.display = hiddenCount > 0 ? 'block' : 'none';
    nextBtn.style.display = 'block';
  }
}

function loadNextWord() {
  currentWordObj = getRandomWord();
  revealedIndices.clear();
  isPhaseTwo = false;

  emojiDisplay.textContent = currentWordObj.emoji;
  updateBadge(currentWordObj.difficulty);
  renderWord();
}

function revealFirstLetter() {
  isPhaseTwo = true;
  revealedIndices.add(0);
  renderWord();
}

function revealRandomLetter() {
  const word = currentWordObj.word.toUpperCase();
  const unrevealed = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ' && !revealedIndices.has(i)) {
      unrevealed.push(i);
    }
  }

  if (unrevealed.length > 0) {
    const randomIndex = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    revealedIndices.add(randomIndex);
    renderWord();
  }
}

function revealFullAnswer() {
  const word = currentWordObj.word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      revealedIndices.add(i);
    }
  }
  renderWord();
}

// Event Listeners
revealFirstBtn.addEventListener('click', revealFirstLetter);
revealRandomBtn.addEventListener('click', revealRandomLetter);
revealAnswerBtn.addEventListener('click', revealFullAnswer);
nextBtn.addEventListener('click', loadNextWord);
difficultySelect.addEventListener('change', loadNextWord);

// Initialize Game
loadNextWord();