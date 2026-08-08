const BIBLE_WORDS_DATA = [
  // Easy
  { 
    word: "Noah", 
    difficulty: "Easy", 
    emoji: "🚢🌧️🕊️", 
    meaning: "Build yourself an ark of gopher wood." 
  },
  { 
    word: "David and Goliath", 
    difficulty: "Easy", 
    emoji: "👑🪨🎯", 
    meaning: "You come against me with sword and spear, but I come against you in the name of the Lord Almighty." 
  },
  { 
    word: "Adam and Eve", 
    difficulty: "Easy", 
    emoji: "🍎🐍🌴", 
    meaning: "Did God really say, 'You must not eat from any tree in the garden'?" 
  },
  { 
    word: "Daniel", 
    difficulty: "Easy", 
    emoji: "🦁🔒🙏", 
    meaning: "My God sent his angel, and he shut the mouths of the lions." 
  },
  { 
    word: "Moses", 
    difficulty: "Easy", 
    emoji: "🌊🪵📜", 
    meaning: "Let my people go!" 
  },
  { 
    word: "Jonah", 
    difficulty: "Easy", 
    emoji: "🐋🌊🫧", 
    meaning: "From inside the fish Jonah prayed to the Lord his God." 
  },
  { 
    word: "Jesus", 
    difficulty: "Easy", 
    emoji: "✝️👑🍞", 
    meaning: "I am the way and the truth and the life. No one comes to the Father except through me." 
  },
  { 
    word: "Samson", 
    difficulty: "Easy", 
    emoji: "💪💇‍♂️🏛️", 
    meaning: "If my head were shaved, my strength would leave me, and I would become as weak as any other man." 
  },

  // Medium
  { 
    word: "Tower of Babel", 
    difficulty: "Medium", 
    emoji: "🏗️🗣️🌍", 
    meaning: "Come, let us build ourselves a city, with a tower that reaches to the heavens." 
  },
  { 
    word: "Zacchaeus", 
    difficulty: "Medium", 
    emoji: "🪵🌳💰", 
    meaning: "Hurry and come down, for I must stay at your house today." 
  },
  { 
    word: "The Good Samaritan", 
    difficulty: "Medium", 
    emoji: "🩹🐴🏨", 
    meaning: "Go and do likewise." 
  },
  { 
    word: "Gideon", 
    difficulty: "Medium", 
    emoji: "🪔🎺🧱", 
    meaning: "A sword for the Lord and for Gideon!" 
  },
  { 
    word: "Queen Esther", 
    difficulty: "Medium", 
    emoji: "👑📜🍷", 
    meaning: "And who knows but that you have come to your royal position for such a time as this?" 
  },
  { 
    word: "Joseph", 
    difficulty: "Medium", 
    emoji: "🧥🌾👑", 
    meaning: "You intended to harm me, but God intended it for good to accomplish what is now being done." 
  },
  { 
    word: "Elijah", 
    difficulty: "Medium", 
    emoji: "🔥🐂🌧️", 
    meaning: "Answer me, Lord, answer me, so these people will know that you, Lord, are God." 
  },
  { 
    word: "Prodigal Son", 
    difficulty: "Medium", 
    emoji: "🐖💰🫂", 
    meaning: "For this son of mine was dead and is alive again; he was lost and is found." 
  },

  // Hard
  { 
    word: "Balaam", 
    difficulty: "Hard", 
    emoji: "🫏🗣️🦯", 
    meaning: "What have I done to you to make you beat me these three times?" 
  },
  { 
    word: "Elisha", 
    difficulty: "Hard", 
    emoji: "🪓🌊🐻", 
    meaning: "Please let a double portion of your spirit be upon me." 
  },
  { 
    word: "Stephen", 
    difficulty: "Hard", 
    emoji: "🪨☁️🕊️", 
    meaning: "Lord, do not hold this sin against them." 
  },
  { 
    word: "Nehemiah", 
    difficulty: "Hard", 
    emoji: "🧱🛠️👑", 
    meaning: "I am doing a great work and I cannot come down." 
  },
  { 
    word: "Shadrach Meshach Abednego", 
    difficulty: "Hard", 
    emoji: "🔥🚶‍♂️4️⃣", 
    meaning: "Look! I see four men walking around in the fire, unbound and unharmed, and the fourth looks like a son of the gods." 
  },
  { 
    word: "Ruth and Naomi", 
    difficulty: "Hard", 
    emoji: "🌾🫂🌾", 
    meaning: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." 
  },
  { 
    word: "Jacob wrestling God", 
    difficulty: "Hard", 
    emoji: "🤼‍♂️🌅🦴", 
    meaning: "I will not let you go unless you bless me." 
  },
  { 
    word: "Job", 
    difficulty: "Hard", 
    emoji: "🌋🏚️💨", 
    meaning: "The Lord gave and the Lord has taken away; may the name of the Lord be praised." 
  }
];

// State Variables
let currentWordObj = null;
let revealedIndices = new Set();
let isPhaseTwo = false;
let isAnswerRevealed = false;
let isQuoteRevealed = false;

// Scoring & History Tracking
let totalScore = 0;
let currentWordValue = 5; // Starts at 5 points
let wordsPlayedCount = 0;
let playedWordsHistory = new Set();
let hasScoredCurrentWord = false;

// DOM Elements
const emojiDisplay = document.getElementById('emoji-display');
const wordDisplay = document.getElementById('word-display');
const meaningDisplay = document.getElementById('meaning-display');
const scoreDisplay = document.getElementById('score-display');

const revealQuoteBtn = document.getElementById('reveal-quote-btn');
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

// Modal Elements
const summaryModal = document.getElementById('summary-modal');
const summaryEmoji = document.getElementById('summary-emoji');
const summaryScoreText = document.getElementById('summary-score-text');
const summaryStatsText = document.getElementById('summary-stats-text');
const summaryMessage = document.getElementById('summary-message');
const restartBtn = document.getElementById('restart-btn');

function getFilteredPool() {
  const selectedDifficulty = difficultySelect.value;
  let pool = BIBLE_WORDS_DATA;
  
  if (selectedDifficulty !== 'All') {
    pool = BIBLE_WORDS_DATA.filter(item => item.difficulty === selectedDifficulty);
  }

  const unplayedPool = pool.filter(item => !playedWordsHistory.has(item.word));
  
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

function deductPoints(amount = 1) {
  currentWordValue = Math.max(1, currentWordValue - amount);
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
  const words = currentWordObj.word.toUpperCase().split(' ');

  let globalIndex = 0;
  const renderedWords = words.map(wordStr => {
    const wordChars = wordStr.split('').map(char => {
      let resultChar = char;
      const isPunctuation = (char === '"' || char === '\'' || char === '-' || char === '/');

      if (!isPunctuation) {
        resultChar = revealedIndices.has(globalIndex) ? char : '_';
      }
      globalIndex++;
      return resultChar;
    });

    // Advance global index for the space separator between words
    globalIndex++;
    
    // Format characters within a word with single space
    return wordChars.join(' ');
  });

  // Format distinct words with double-space gap for clear visual separation
  wordDisplay.textContent = renderedWords.join('  ');
  updateButtonVisibility();
}

function updateButtonVisibility() {
  const unrevealedCount = getUnrevealedIndices().length;

  nextBtn.style.display = 'block';
  endRoundBtn.style.display = 'block';

  if (hasScoredCurrentWord) {
    revealQuoteBtn.style.display = 'none';
    revealFirstBtn.style.display = 'none';
    revealRandomBtn.style.display = 'none';
    revealAnswerBtn.style.display = 'none';
    answerActions.style.display = 'none';
    return;
  }

  revealQuoteBtn.style.display = (isQuoteRevealed || isAnswerRevealed) ? 'none' : 'block';
  revealAnswerBtn.style.display = isAnswerRevealed ? 'none' : 'block';

  const revealBtnText = currentWordValue > 1 ? "Reveal Letter (-1 Pt)" : "Reveal Letter";
  revealFirstBtn.textContent = revealBtnText;
  revealRandomBtn.textContent = revealBtnText;

  const ptsLabel = currentWordValue === 1 ? "1 point" : `${currentWordValue} points`;
  correctBtn.textContent = `Got Correct (+${ptsLabel})`;

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
  isQuoteRevealed = false;
  currentWordValue = 5;
  hasScoredCurrentWord = false;

  emojiDisplay.textContent = currentWordObj.emoji;
  meaningDisplay.textContent = '';
  updateBadge(currentWordObj.difficulty);
  renderWord();
}

function revealQuote() {
  if (isQuoteRevealed) return;
  isQuoteRevealed = true;
  deductPoints(2); // Quote hint costs 2 points
  meaningDisplay.textContent = currentWordObj.meaning ? `"${currentWordObj.meaning}"` : '';
  updateButtonVisibility();
}

function revealFirstLetter() {
  isPhaseTwo = true;
  deductPoints(1);
  const word = currentWordObj.word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char >= 'A' && char <= 'Z') {
      revealedIndices.add(i);
      break;
    }
  }

  if (getUnrevealedIndices().length === 0) {
    revealFullAnswer();
  } else {
    renderWord();
  }
}

function revealRandomLetter() {
  const unrevealed = getUnrevealedIndices();

  if (unrevealed.length > 0) {
    deductPoints(1);
    const randomIndex = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    revealedIndices.add(randomIndex);

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
  if (currentWordObj.meaning) {
    meaningDisplay.textContent = `"${currentWordObj.meaning}"`;
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
  } else if (avgScore >= 4.0) {
    summaryEmoji.textContent = "🏆";
    summaryMessage.textContent = "Outstanding! Flawless knowledge!";
  } else if (avgScore >= 2.5) {
    summaryEmoji.textContent = "🌟";
    summaryMessage.textContent = "Great effort! Solid performance.";
  } else {
    summaryEmoji.textContent = "👍";
    summaryMessage.textContent = "Good practice! Keep going!";
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

// Event Listeners
revealQuoteBtn.addEventListener('click', revealQuote);
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

// Initialize Game
updateScoreboard();
loadNextWord();