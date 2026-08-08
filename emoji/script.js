const STANDARD_WORDS_DATA = [
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

const GENZ_WORDS_DATA = [
  // Easy
  { word: "No cap", meaning: "For real / No lie", difficulty: "Easy", emoji: "🧢" },
  { word: "Sus", meaning: "Suspicious / shady", difficulty: "Easy", emoji: "🤨" },
  { word: "Flex", meaning: "Show off", difficulty: "Easy", emoji: "💪" },
  { word: "Slay", meaning: "Do something exceptionally well", difficulty: "Easy", emoji: "👑" },
  { word: "Mid", meaning: "Average or disappointing", difficulty: "Easy", emoji: "😐" },
  { word: "Ghost", meaning: "Cut off communication without warning", difficulty: "Easy", emoji: "👻" },
  { word: "Tea", meaning: "Gossip / news", difficulty: "Easy", emoji: "☕" },
  { word: "Clock it", meaning: "Call out / notice / identify the truth", difficulty: "Easy", emoji: "⏰" },

  // Medium
  { word: "Bet", meaning: "\"Deal\" or \"You got it\"", difficulty: "Medium", emoji: "🤝" },
  { word: "Rizz", meaning: "Romantic charm / charisma", difficulty: "Medium", emoji: "😏" },
  { word: "BFFR", meaning: "\"Be for real\"", difficulty: "Medium", emoji: "🤦‍♂️" },
  { word: "Main character", meaning: "Someone making everything about themselves", difficulty: "Medium", emoji: "🎬" },
  { word: "Glow up", meaning: "Major positive transformation", difficulty: "Medium", emoji: "🦋" },
  { word: "Valid", meaning: "Understandable or acceptable", difficulty: "Medium", emoji: "👍" },
  { word: "Let them cook", meaning: "Let someone do their thing / shine", difficulty: "Medium", emoji: "🍳" },
  { word: "Salty", meaning: "Bitter or upset over something small", difficulty: "Medium", emoji: "🧂" },
  { word: "Living rent-free", meaning: "Stuck in someone's head constantly", difficulty: "Medium", emoji: "🧠" },
  { word: "Catch hands", meaning: "Get into a physical fight", difficulty: "Medium", emoji: "👊" },
  { word: "Period", meaning: "End of discussion / Emphatic statement", difficulty: "Medium", emoji: "💅" },
  { word: "NPC", meaning: "Someone who acts like a background character", difficulty: "Medium", emoji: "🤖" },
  { word: "Side eye", meaning: "Disapproval or judgment", difficulty: "Medium", emoji: "😒" },

  // Hard
  { word: "Aura", meaning: "Overall cool factor / presence (+/- points)", difficulty: "Hard", emoji: "✨" },
  { word: "Delulu", meaning: "Playfully delusional", difficulty: "Hard", emoji: "🌀" },
  { word: "Mewing", meaning: "Staying silent to define one's jawline", difficulty: "Hard", emoji: "🤫" },
  { word: "Brainrot", meaning: "Low-quality, addictive internet content", difficulty: "Hard", emoji: "🧟" },
  { word: "Crash out", meaning: "Uncontrollably lose control or rage", difficulty: "Hard", emoji: "💥" },
  { word: "Glaze", meaning: "Overly praise or flatter someone", difficulty: "Hard", emoji: "🍩" },
  { word: "Standing business", meaning: "Taking care of responsibilities seriously", difficulty: "Hard", emoji: "💼" },
  { word: "Locked in", meaning: "Completely focused or determined", difficulty: "Hard", emoji: "🔒" },
  { word: "Roman Empire", meaning: "Something you think about inexplicably often", difficulty: "Hard", emoji: "🏛️" },
  { word: "Uncanny valley", meaning: "Something slightly off that feels unsettling", difficulty: "Hard", emoji: "👁️" },
  { word: "Gagged", meaning: "Left completely speechless or shocked", difficulty: "Hard", emoji: "😮" },
  { word: "Ate and left no crumbs", meaning: "Performed something perfectly", difficulty: "Hard", emoji: "🍽️" },
  { word: "Real ones", meaning: "Loyal and trustworthy friends", difficulty: "Hard", emoji: "💯" },
  { word: "Heavy on it", meaning: "Strongly emphasizing or agreeing with a point", difficulty: "Hard", emoji: "🔊" }
];

let currentWordObj = null;
let revealedIndices = new Set();
let isPhaseTwo = false;
let isGenZMode = false;

// DOM Elements
const emojiDisplay = document.getElementById('emoji-display');
const wordDisplay = document.getElementById('word-display');
const meaningDisplay = document.getElementById('meaning-display');
const revealFirstBtn = document.getElementById('reveal-first-btn');
const revealRandomBtn = document.getElementById('reveal-random-btn');
const revealAnswerBtn = document.getElementById('reveal-answer-btn');
const nextBtn = document.getElementById('next-btn');
const difficultySelect = document.getElementById('difficulty-select');
const filterContainer = document.getElementById('filter-container');
const difficultyBadge = document.getElementById('difficulty-badge');
const genzToggle = document.getElementById('genz-toggle');
const toggleLabel = document.getElementById('toggle-label');

function getActiveDataset() {
  return isGenZMode ? GENZ_WORDS_DATA : STANDARD_WORDS_DATA;
}

function getFilteredPool() {
  const activeData = getActiveDataset();
  const selectedDifficulty = difficultySelect.value;
  if (selectedDifficulty === 'All' || isGenZMode) {
    return [...activeData];
  }
  return activeData.filter(item => item.difficulty === selectedDifficulty);
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
    if (char === ' ' || char === '"' || char === '\'' || char === '-' || char === '/') {
      return char;
    }
    return revealedIndices.has(index) ? char : '_';
  });

  wordDisplay.textContent = displayChars.join(' ');
  updateButtonVisibility();
}

function updateButtonVisibility() {
  const word = currentWordObj.word.toUpperCase();
  const hiddenCount = word.split('').filter((char, idx) => {
    const isPunctuation = (char === ' ' || char === '"' || char === '\'' || char === '-' || char === '/');
    return !isPunctuation && !revealedIndices.has(idx);
  }).length;

  // Next Word is always visible
  nextBtn.style.display = 'block';

  if (!isPhaseTwo) {
    // Phase 1
    revealFirstBtn.style.display = 'block';
    revealRandomBtn.style.display = 'none';
    revealAnswerBtn.style.display = 'none';
  } else {
    // Phase 2
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = hiddenCount > 0 ? 'block' : 'none';
    revealAnswerBtn.style.display = hiddenCount > 0 ? 'block' : 'none';
  }
}

function loadNextWord() {
  currentWordObj = getRandomWord();
  revealedIndices.clear();
  isPhaseTwo = false;

  emojiDisplay.textContent = currentWordObj.emoji;
  meaningDisplay.textContent = isGenZMode && currentWordObj.meaning ? `"${currentWordObj.meaning}"` : '';
  updateBadge(currentWordObj.difficulty);
  renderWord();
}

function revealFirstLetter() {
  isPhaseTwo = true;
  const word = currentWordObj.word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char >= 'A' && char <= 'Z') {
      revealedIndices.add(i);
      break;
    }
  }
  renderWord();
}

function revealRandomLetter() {
  const word = currentWordObj.word.toUpperCase();
  const unrevealed = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const isPunctuation = (char === ' ' || char === '"' || char === '\'' || char === '-' || char === '/');
    if (!isPunctuation && !revealedIndices.has(i)) {
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
    revealedIndices.add(i);
  }
  renderWord();
}

function toggleGenZMode(e) {
  isGenZMode = e.target.checked;
  
  if (isGenZMode) {
    document.body.classList.add('genz-active');
    toggleLabel.textContent = 'Gen Z Mode: ON 🔥';
    filterContainer.style.display = 'none';
  } else {
    document.body.classList.remove('genz-active');
    toggleLabel.textContent = 'Gen Z Mode: OFF';
    filterContainer.style.display = 'flex';
  }

  loadNextWord();
}

// Event Listeners
revealFirstBtn.addEventListener('click', revealFirstLetter);
revealRandomBtn.addEventListener('click', revealRandomLetter);
revealAnswerBtn.addEventListener('click', revealFullAnswer);
nextBtn.addEventListener('click', loadNextWord);
difficultySelect.addEventListener('change', loadNextWord);
genzToggle.addEventListener('change', toggleGenZMode);

// Initialize Game
loadNextWord();