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

// State Variables
let currentWordObj = null;
let revealedIndices = new Set();
let isPhaseTwo = false;
let isAnswerRevealed = false;
let isGenZMode = false;

// Scoring & History Tracking
let totalScore = 0;
let currentWordValue = 3; // Starts at 3, min 1
let wordsPlayedCount = 0;
let playedWordsHistory = new Set();
let hasScoredCurrentWord = false;

// DOM Elements
const emojiDisplay = document.getElementById('emoji-display');
const wordDisplay = document.getElementById('word-display');
const meaningDisplay = document.getElementById('meaning-display');
const scoreDisplay = document.getElementById('score-display');

const revealFirstBtn = document.getElementById('reveal-first-btn');
const revealRandomBtn = document.getElementById('reveal-random-btn');
const revealAnswerBtn = document.getElementById('reveal-answer-btn');
const answerActions = document.getElementById('answer-actions');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const nextBtn = document.getElementById('next-btn');
const endRoundBtn = document.getElementById('end-round-btn');

const difficultySelect = document.getElementById('difficulty-select');
const filterContainer = document.getElementById('filter-container');
const difficultyBadge = document.getElementById('difficulty-badge');
const genzToggle = document.getElementById('genz-toggle');
const toggleLabel = document.getElementById('toggle-label');

// Modal Elements
const summaryModal = document.getElementById('summary-modal');
const summaryEmoji = document.getElementById('summary-emoji');
const summaryScoreText = document.getElementById('summary-score-text');
const summaryStatsText = document.getElementById('summary-stats-text');
const summaryMessage = document.getElementById('summary-message');
const restartBtn = document.getElementById('restart-btn');

function getActiveDataset() {
  return isGenZMode ? GENZ_WORDS_DATA : STANDARD_WORDS_DATA;
}

function getFilteredPool() {
  const activeData = getActiveDataset();
  const selectedDifficulty = difficultySelect.value;
  
  let pool = activeData;
  if (!isGenZMode && selectedDifficulty !== 'All') {
    pool = activeData.filter(item => item.difficulty === selectedDifficulty);
  }

  // Exclude previously played words
  const unplayedPool = pool.filter(item => !playedWordsHistory.has(item.word));
  
  // Reset pool history if all words in current category have been used
  if (unplayedPool.length === 0 && pool.length > 0) {
    playedWordsHistory.clear();
    return pool;
  }

  return unplayedPool;
}

function getRandomWord() {
  const pool = getFilteredPool();
  if (pool.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function updateBadge(difficulty) {
  difficultyBadge.textContent = difficulty;
  difficultyBadge.className = `difficulty-badge ${difficulty.toLowerCase()}`;
}

function updateScoreboard() {
  scoreDisplay.textContent = `Score: ${totalScore}`;
}

function deductPoint() {
  if (currentWordValue > 1) {
    currentWordValue--;
  }
}

function getUnrevealedIndices() {
  const word = currentWordObj.word.toUpperCase();
  const unrevealed = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const isPunctuation = (char === ' ' || char === '"' || char === '\'' || char === '-' || char === '/');
    if (!isPunctuation && !revealedIndices.has(i)) {
      unrevealed.push(i);
    }
  }

  return unrevealed;
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
  const unrevealedCount = getUnrevealedIndices().length;

  // Always visible elements
  nextBtn.style.display = 'block';
  endRoundBtn.style.display = 'block';

  if (hasScoredCurrentWord) {
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = 'none';
    revealAnswerBtn.style.display = 'none';
    answerActions.style.display = 'none';
    return;
  }

  // Hide Reveal Answer button once answer is revealed
  revealAnswerBtn.style.display = isAnswerRevealed ? 'none' : 'block';

  // Update Reveal button text based on points floor
  const revealBtnText = currentWordValue > 1 ? "Reveal Letter (-1 point)" : "Reveal Letter";
  revealFirstBtn.textContent = revealBtnText;
  revealRandomBtn.textContent = revealBtnText;

  // Dynamic point count on Correct button
  const ptsLabel = currentWordValue === 1 ? "1 point" : `${currentWordValue} points`;
  correctBtn.textContent = `Got Correct (+${ptsLabel})`;

  // Answer status buttons show ONLY after "Reveal Answer" is pressed (or auto-triggered)
  answerActions.style.display = isAnswerRevealed ? 'flex' : 'none';

  if (isAnswerRevealed || unrevealedCount === 0) {
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = 'none';
  } else if (!isPhaseTwo) {
    revealFirstBtn.style.display = 'block';
    revealRandomBtn.style.display = 'none';
  } else {
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = 'block';
  }
}

function loadNextWord() {
  currentWordObj = getRandomWord();
  if (!currentWordObj) return;

  playedWordsHistory.add(currentWordObj.word);
  revealedIndices.clear();
  isPhaseTwo = false;
  isAnswerRevealed = false;
  currentWordValue = 3;
  hasScoredCurrentWord = false;

  emojiDisplay.textContent = currentWordObj.emoji;
  meaningDisplay.textContent = isGenZMode && currentWordObj.meaning ? `"${currentWordObj.meaning}"` : '';
  updateBadge(currentWordObj.difficulty);
  renderWord();
}

function revealFirstLetter() {
  isPhaseTwo = true;
  deductPoint();
  const word = currentWordObj.word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char >= 'A' && char <= 'Z') {
      revealedIndices.add(i);
      break;
    }
  }

  // If revealing this letter completed the word, trigger reveal full answer
  if (getUnrevealedIndices().length === 0) {
    revealFullAnswer();
  } else {
    renderWord();
  }
}

function revealRandomLetter() {
  const unrevealed = getUnrevealedIndices();

  if (unrevealed.length > 0) {
    deductPoint();
    const randomIndex = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    revealedIndices.add(randomIndex);

    // If revealing this letter completed the word, trigger reveal full answer
    if (getUnrevealedIndices().length === 0) {
      revealFullAnswer();
    } else {
      renderWord();
    }
  }
}

function revealFullAnswer() {
  isAnswerRevealed = true;
  const word = currentWordObj.word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    revealedIndices.add(i);
  }
  renderWord();
}

function markAnswer(isCorrect) {
  if (hasScoredCurrentWord) return;

  if (isCorrect) {
    totalScore += currentWordValue;
  }
  wordsPlayedCount++;
  hasScoredCurrentWord = true;
  
  updateScoreboard();
  loadNextWord();
}

function showRoundSummary() {
  summaryScoreText.textContent = `Total Score: ${totalScore}`;
  summaryStatsText.textContent = `Played ${wordsPlayedCount} word${wordsPlayedCount === 1 ? '' : 's'}`;

  const avgScore = wordsPlayedCount > 0 ? totalScore / wordsPlayedCount : 0;

  if (wordsPlayedCount === 0) {
    summaryEmoji.textContent = "🤔";
    summaryMessage.textContent = "No words played yet!";
  } else if (avgScore >= 2.5) {
    summaryEmoji.textContent = isGenZMode ? "🔥" : "🏆";
    summaryMessage.textContent = isGenZMode ? "Absolute W! You ate and left no crumbs!" : "Outstanding! Flawless knowledge!";
  } else if (avgScore >= 1.5) {
    summaryEmoji.textContent = isGenZMode ? "⚡️" : "🌟";
    summaryMessage.textContent = isGenZMode ? "Valid effort! Clean run." : "Great effort! Solid performance.";
  } else {
    summaryEmoji.textContent = isGenZMode ? "💀" : "👍";
    summaryMessage.textContent = isGenZMode ? "Cooked... better luck next time!" : "Good practice! Keep going!";
  }

  summaryModal.style.display = 'flex';
}

function resetGameRound() {
  totalScore = 0;
  wordsPlayedCount = 0;
  playedWordsHistory.clear();
  summaryModal.style.display = 'none';
  updateScoreboard();
  loadNextWord();
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

  playedWordsHistory.clear();
  loadNextWord();
}

// Event Listeners
revealFirstBtn.addEventListener('click', revealFirstLetter);
revealRandomBtn.addEventListener('click', revealRandomLetter);
revealAnswerBtn.addEventListener('click', revealFullAnswer);
correctBtn.addEventListener('click', () => markAnswer(true));
wrongBtn.addEventListener('click', () => markAnswer(false));
nextBtn.addEventListener('click', loadNextWord);
endRoundBtn.addEventListener('click', showRoundSummary);
restartBtn.addEventListener('click', resetGameRound);

difficultySelect.addEventListener('change', () => {
  playedWordsHistory.clear();
  loadNextWord();
});

genzToggle.addEventListener('change', toggleGenZMode);

// Initialize Game
updateScoreboard();
loadNextWord();