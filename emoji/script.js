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

// Stage Constants: 1 = Hidden, 2 = Hint (First letter revealed), 3 = Full Word revealed
const STAGE_HIDDEN = 1;
const STAGE_HINT = 2;
const STAGE_FULL = 3;

let currentStage = STAGE_HIDDEN;
let currentWordObj = null;
let filteredWords = [...WORDS_DATA];

// DOM Elements
const emojiDisplay = document.getElementById('emoji-display');
const wordDisplay = document.getElementById('word-display');
const actionBtn = document.getElementById('action-btn');
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

function renderStage() {
  const word = currentWordObj.word.toUpperCase();

  if (currentStage === STAGE_HIDDEN) {
    wordDisplay.textContent = '';
    actionBtn.textContent = 'Reveal Hint';
    actionBtn.style.display = 'block';
  } else if (currentStage === STAGE_HINT) {
    const firstLetter = word.charAt(0);
    const blanks = '_ '.repeat(word.length - 1).trim();
    wordDisplay.textContent = `${firstLetter} ${blanks}`;
    actionBtn.textContent = 'Reveal Final Spelling';
    actionBtn.style.display = 'block';
  } else if (currentStage === STAGE_FULL) {
    wordDisplay.textContent = word;
    actionBtn.style.display = 'none';
  }
}

function loadNextWord() {
  currentWordObj = getRandomWord();
  currentStage = STAGE_HIDDEN;
  emojiDisplay.textContent = currentWordObj.emoji;
  updateBadge(currentWordObj.difficulty);
  renderStage();
}

function handleActionClick() {
  if (currentStage === STAGE_HIDDEN) {
    currentStage = STAGE_HINT;
  } else if (currentStage === STAGE_HINT) {
    currentStage = STAGE_FULL;
  }
  renderStage();
}

// Event Listeners
actionBtn.addEventListener('click', handleActionClick);
nextBtn.addEventListener('click', loadNextWord);
difficultySelect.addEventListener('change', loadNextWord);

// Initialize Game
loadNextWord();