const MOVIE_WORDS_DATA = [
  // --- Easy ---
  { 
    word: "Titanic", 
    difficulty: "Easy", 
    emoji: "🚢🧊🥶🚪🏊‍♂️🌊", 
    meaning: "I'm the king of the world!" 
  },
  { 
    word: "The Lion King", 
    difficulty: "Easy", 
    emoji: "🦁👑🌅🐗🦦🪨", 
    meaning: "Everything the light touches is our kingdom." 
  },
  { 
    word: "Jurassic Park", 
    difficulty: "Easy", 
    emoji: "🦖🦕🌴🚙⚡️🏃‍♂️", 
    meaning: "Life, uh, finds a way." 
  },
  { 
    word: "Finding Nemo", 
    difficulty: "Easy", 
    emoji: "🐠🪸🌊🦘🔍⛵️", 
    meaning: "Just keep swimming!" 
  },
  { 
    word: "Up", 
    difficulty: "Easy", 
    emoji: "🎈🏠👴🏻👦🏻🐕🎈", 
    meaning: "Adventure is out there!" 
  },
  { 
    word: "Spider-Man", 
    difficulty: "Easy", 
    emoji: "🕷️🕸️🗽🔴🔵🥊", 
    meaning: "With great power comes great responsibility." 
  },
  { 
    word: "Harry Potter", 
    difficulty: "Easy", 
    emoji: "⚡️👓🏰🧙‍♂️🧹🦉", 
    meaning: "You're a wizard, Harry." 
  },
  { 
    word: "Frozen", 
    difficulty: "Easy", 
    emoji: "❄️👑👸🏼☃️🏰👑", 
    meaning: "Let it go, let it go!" 
  },
  {
    word: "Shrek",
    difficulty: "Easy",
    emoji: "👹🧅🥑🏰👸🏼🐴🪞",
    meaning: "Ogres are like onions. Onions have layers."
  },
  {
    word: "Cars",
    difficulty: "Easy",
    emoji: "🏎️⚡️🌵🛠️🏆🏁🛞",
    meaning: "I am speed."
  },
  {
    word: "Toy Story",
    difficulty: "Easy",
    emoji: "🤠🚀🧸📦🤠🚀🪐",
    meaning: "To infinity and beyond!"
  },
  {
    word: "Aladdin",
    difficulty: "Easy",
    emoji: "🧞‍♂️🪔🐒🕌🪶👸🏽✈️",
    meaning: "Phenomenal cosmic powers... itty bitty living space."
  },
  {
    word: "The Karate Kid",
    difficulty: "Easy",
    emoji: "🥋🕯️🧼🚙🥋🦶🏆",
    meaning: "Wax on, wax off."
  },
  {
    word: "Star Wars",
    difficulty: "Easy",
    emoji: "⚔️🌌🤖🛰️👽👑🚀",
    meaning: "May the Force be with you."
  },

  // --- Medium ---
  { 
    word: "The Matrix", 
    difficulty: "Medium", 
    emoji: "🕶️💊🟢💻🕶️🥋💥", 
    meaning: "You take the blue pill, the story ends... You take the red pill, you stay in Wonderland." 
  },
  { 
    word: "Inception", 
    difficulty: "Medium", 
    emoji: "🛌💤💭🌀🏙️⏱️💼", 
    meaning: "An idea is like a virus. Resilient. Highly contagious." 
  },
  { 
    word: "Back to the Future", 
    difficulty: "Medium", 
    emoji: "🏎️💨⚡️👴🏻👦🏻🛹⏰", 
    meaning: "Roads? Where we're going, we don't need roads." 
  },
  { 
    word: "Jaws", 
    difficulty: "Medium", 
    emoji: "🦈🌊🏊‍♀️🛥️🎣💥", 
    meaning: "You're gonna need a bigger boat." 
  },
  { 
    word: "Ghostbusters", 
    difficulty: "Medium", 
    emoji: "👻🚫🚨🔫🏢🛻👻", 
    meaning: "Who ya gonna call?" 
  },
  { 
    word: "Cast Away", 
    difficulty: "Medium", 
    emoji: "✈️💥🏝️🪵🏐🔥🧔🏻‍♂️", 
    meaning: "WILSON!" 
  },
  { 
    word: "Home Alone", 
    difficulty: "Medium", 
    emoji: "🏠👦🏻🎄🍕🪤🦹‍♂️🦹‍♂️", 
    meaning: "Keep the change, ya filthy animal." 
  },
  { 
    word: "The Avengers", 
    difficulty: "Medium", 
    emoji: "🛡️🔨🟩🏹🦾👽🗽", 
    meaning: "Avengers, assemble!" 
  },
  {
    word: "The Terminator",
    difficulty: "Medium",
    emoji: "🤖🕶️🏍️💥🏭⌛️🕶️",
    meaning: "I'll be back."
  },
  {
    word: "The Wizard of Oz",
    difficulty: "Medium",
    emoji: "🌪️🐕👠🦁🤖🌾🌈",
    meaning: "There's no place like home."
  },
  {
    word: "Pirates of the Caribbean",
    difficulty: "Medium",
    emoji: "🏴‍☠️🦜🪙⚔️🍷⚓️💀",
    meaning: "This is the day you will always remember as the day you almost caught Captain Jack Sparrow."
  },
  {
    word: "Men in Black",
    difficulty: "Medium",
    emoji: "🕶️💼🔫👽🕶️🛸💥",
    meaning: "You know the difference between you and me? I make this look good."
  },
  {
    word: "The Dark Knight",
    difficulty: "Medium",
    emoji: "🦇🤡🃏🏙️🚔💥💰",
    meaning: "Why so serious?"
  },
  {
    word: "Fight Club",
    difficulty: "Medium",
    emoji: "🧼🧼👔💥🥊🏙️🛌",
    meaning: "The first rule of Fight Club is: You do not talk about Fight Club."
  },

  // --- Hard ---
  { 
    word: "The Shawshank Redemption", 
    difficulty: "Hard", 
    emoji: "🏦🧱🔨🌧️🌧️🏃‍♂️🔓📜", 
    meaning: "Get busy living, or get busy dying." 
  },
  { 
    word: "Interstellar", 
    difficulty: "Hard", 
    emoji: "🚀🌽🕳️⏳🪐👧🏻📚👨‍🚀", 
    meaning: "Love is the one thing that transcends time and space." 
  },
  { 
    word: "Gladiator", 
    difficulty: "Hard", 
    emoji: "🏛️⚔️🛡️🌾🐅👑🩸", 
    meaning: "Are you not entertained?!" 
  },
  { 
    word: "E.T. the Extra-Terrestrial", 
    difficulty: "Hard", 
    emoji: "👽👉📱🚲🌕👦🏻🛸", 
    meaning: "E.T. phone home." 
  },
  { 
    word: "Forrest Gump", 
    difficulty: "Hard", 
    emoji: "🍫🏃‍♂️🪶🎖️🛺🍤🌾", 
    meaning: "Life is like a box of chocolates. You never know what you're gonna get." 
  },
  { 
    word: "Monsters, Inc.", 
    difficulty: "Hard", 
    emoji: "🚪👁️👹👧🏻🏭😱🔋", 
    meaning: "We scare because we care." 
  },
  { 
    word: "The Lord of the Rings", 
    difficulty: "Hard", 
    emoji: "💍🌋🧙‍♂️🧝‍♂️🏹🗡️🦶⛰️", 
    meaning: "One ring to rule them all..." 
  },
  { 
    word: "Ratatouille", 
    difficulty: "Hard", 
    emoji: "🐀👨‍🍳🧑‍🍳🥖🍷🇫🇷🍲", 
    meaning: "Anyone can cook." 
  },
  {
    word: "Pulp Fiction",
    difficulty: "Hard",
    emoji: "🍔💼🕺💃💉🔫📖",
    meaning: "Say 'what' again. I dare you, I double dare you."
  },
  {
    word: "The Silence of the Lambs",
    difficulty: "Hard",
    emoji: "🦋🍷🥩🔍🚔🪰🗝️",
    meaning: "I ate his liver with some fava beans and a nice Chianti."
  },
  {
    word: "The Truman Show",
    difficulty: "Hard",
    emoji: "📺🌊⛵️🚪☁️🎬🧍‍♂️",
    meaning: "In case I don't see ya, good afternoon, good evening, and good night!"
  },
  {
    word: "The Sixth Sense",
    difficulty: "Hard",
    emoji: "👻👦🏻🛋️🩺❄️🚪😱",
    meaning: "I see dead people."
  },
  {
    word: "Groundhog Day",
    difficulty: "Hard",
    emoji: "⏰🦔❄️🎥🔄🌧️📻",
    meaning: "Well, what if there is no tomorrow? There wasn't one today."
  },
  {
    word: "Apollo 13",
    difficulty: "Hard",
    emoji: "🚀🌕💥📟👨‍🚀🇺🇸🌊",
    meaning: "Houston, we have a problem."
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
  let pool = MOVIE_WORDS_DATA;
  
  if (selectedDifficulty !== 'All') {
    pool = MOVIE_WORDS_DATA.filter(item => item.difficulty === selectedDifficulty);
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
    const isPunctuation = (char === ' ' || char === '"' || char === '\'' || char === '-' || char === '/' || char === '.' || char === ',');
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
      const isPunctuation = (char === '"' || char === '\'' || char === '-' || char === '/' || char === '.' || char === ',');

      if (!isPunctuation) {
        resultChar = revealedIndices.has(globalIndex) ? char : '_';
      }
      globalIndex++;
      return resultChar;
    });

    // Advance global index for space separator
    globalIndex++;
    
    return wordChars.join(' ');
  });

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
  deductPoints(2);
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
  summaryStatsText.textContent = `Played ${wordsPlayedCount} movie${wordsPlayedCount === 1 ? '' : 's'}`;

  const avgScore = wordsPlayedCount > 0 ? totalScore / wordsPlayedCount : 0;

  if (wordsPlayedCount === 0) {
    summaryEmoji.textContent = "🤔";
    summaryMessage.textContent = "No movies played yet!";
  } else if (avgScore >= 4.0) {
    summaryEmoji.textContent = "🎬";
    summaryMessage.textContent = "Outstanding! Ultimate Movie Buff!";
  } else if (avgScore >= 2.5) {
    summaryEmoji.textContent = "🍿";
    summaryMessage.textContent = "Great effort! Solid cinema knowledge.";
  } else {
    summaryEmoji.textContent = "🎟️";
    summaryMessage.textContent = "Good try! Keep watching more movies!";
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