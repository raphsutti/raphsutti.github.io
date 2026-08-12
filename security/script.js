const SECURITY_WORDS_DATA = [
  // --- Easy: security fundamentals ---
  {
    word: "Phishing",
    difficulty: "Easy",
    emoji: "🎣📧🚨🕵️",
    meaning: "A deceptive message trying to make you click, disclose or act."
  },
  {
    word: "Multi Factor Authentication",
    difficulty: "Easy",
    emoji: "🔐📱🔢✅",
    meaning: "More than one proof that you are who you say you are."
  },
  {
    word: "Least Privilege",
    difficulty: "Easy",
    emoji: "🔑⬇️👤🛡️",
    meaning: "Give people and services only the access they actually need."
  },
  {
    word: "Password Manager",
    difficulty: "Easy",
    emoji: "🔑📦🔒🧠",
    meaning: "A secure place to create and store unique passwords."
  },
  {
    word: "Encryption",
    difficulty: "Easy",
    emoji: "📄🔐🔀🛡️",
    meaning: "Turn readable information into protected data."
  },
  {
    word: "Authentication",
    difficulty: "Easy",
    emoji: "👤🪪✅🚪",
    meaning: "Prove your identity before being allowed access."
  },
  {
    word: "Access Control",
    difficulty: "Easy",
    emoji: "🚪🔑👥🛡️",
    meaning: "Decide who or what is allowed to access a resource."
  },
  {
    word: "Social Engineering",
    difficulty: "Easy",
    emoji: "🧠🎭📞🎣",
    meaning: "Manipulating people instead of systems to get information or access."
  },
  {
    word: "Firewall",
    difficulty: "Easy",
    emoji: "🔥🧱🌐🛡️",
    meaning: "A barrier that filters network traffic according to rules."
  },
  {
    word: "Security Awareness",
    difficulty: "Easy",
    emoji: "🧠💡👥🔒",
    meaning: "Understanding the actions people can take to stay secure."
  },

  // --- Medium: security practices ---
  {
    word: "Vulnerability Management",
    difficulty: "Medium",
    emoji: "🐛📊🔧⏱️✅",
    meaning: "Find, prioritise, assign and fix weaknesses before they become bigger risks."
  },
  {
    word: "Incident Response",
    difficulty: "Medium",
    emoji: "🚨📞🧯🛡️🔄",
    meaning: "The coordinated process for handling a security incident."
  },
  {
    word: "Threat Hunting",
    difficulty: "Medium",
    emoji: "🔎🕵️‍♀️🦠🗺️",
    meaning: "Proactively searching for suspicious activity before it becomes an incident."
  },
  {
    word: "Security Culture",
    difficulty: "Medium",
    emoji: "🧠👥🔒💬🌱",
    meaning: "The team that helps improve security behaviours and awareness."
  },
  {
    word: "Patch Management",
    difficulty: "Medium",
    emoji: "🩹💻🔧⏰✅",
    meaning: "Keep software updated to reduce known security weaknesses."
  },
  {
    word: "Attack Surface",
    difficulty: "Medium",
    emoji: "🌐🗺️🎯💻🔍",
    meaning: "All the places where an attacker might try to gain access."
  },
  {
    word: "CVE",
    difficulty: "Medium",
    emoji: "🐛🏷️🔢📋",
    meaning: "A standard identifier for a publicly known software vulnerability."
  },
  {
    word: "Security Monitoring",
    difficulty: "Medium",
    emoji: "📡👀💻🚨📊",
    meaning: "Continuously watching systems and activity for signs of trouble."
  },
  {
    word: "Alert Triage",
    difficulty: "Medium",
    emoji: "🚨📥🔎✅❌",
    meaning: "Sort and assess alerts to determine what needs attention first."
  },
  {
    word: "Data Classification",
    difficulty: "Medium",
    emoji: "📄🏷️🗂️🔒",
    meaning: "Label information according to its sensitivity and handling needs."
  },
  {
    word: "Secrets Management",
    difficulty: "Medium",
    emoji: "🤫🔑🗄️🛡️",
    meaning: "Store and control passwords, tokens and keys securely."
  },
  {
    word: "Dependency Scanning",
    difficulty: "Medium",
    emoji: "📦🔎🐛💻✅",
    meaning: "Check third-party software components for known risks."
  },

  // --- Hard: SEEK Security team names ---
  {
    word: "AI Security",
    difficulty: "Hard",
    emoji: "🤖🔒🧠🛡️",
    meaning: "Help teams build with AI confidently, securely and at velocity."
  },
  {
    word: "Cloud and Product Security",
    difficulty: "Hard",
    emoji: "☁️📦🔒🛡️",
    meaning: "Protect cloud infrastructure, products and the security tools supporting them."
  },
  {
    word: "Corporate Security",
    difficulty: "Hard",
    emoji: "🏢🪪🔑📜🛡️",
    meaning: "Protect information assets, identity, access, policies and third-party trust."
  },
  {
    word: "Offensive Security",
    difficulty: "Hard",
    emoji: "⚔️🔴🎯🧑‍💻🛡️",
    meaning: "Find weaknesses by testing systems and controls like an attacker."
  },
  {
    word: "Proactive Intelligence and Threat Detection",
    difficulty: "Hard",
    emoji: "🧠🔎🚩🦠📡",
    meaning: "Detect, investigate and mitigate internal and external security threats."
  },
  {
    word: "Security Culture",
    difficulty: "Hard",
    emoji: "🧠👥🔒💬🌱",
    meaning: "Influence positive security behaviours and reduce human risk."
  },
  {
    word: "Security Operations",
    difficulty: "Hard",
    emoji: "🖥️👀🚨🧯🔄",
    meaning: "Monitor and respond to security threats across corporate and production environments."
  },
  {
    word: "Security Platform Engineering",
    difficulty: "Hard",
    emoji: "⚙️🛠️🔧🛡️📊",
    meaning: "Build and operate security tooling and engineering solutions for the Security organisation."
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
  let pool = SECURITY_WORDS_DATA;
  
  if (selectedDifficulty !== 'All') {
    pool = SECURITY_WORDS_DATA.filter(item => item.difficulty === selectedDifficulty);
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
  summaryStatsText.textContent = `Played ${wordsPlayedCount} term${wordsPlayedCount === 1 ? '' : 's'}`;

  const avgScore = wordsPlayedCount > 0 ? totalScore / wordsPlayedCount : 0;

  if (wordsPlayedCount === 0) {
    summaryEmoji.textContent = "🤔";
    summaryMessage.textContent = "No terms played yet!";
  } else if (avgScore >= 4.0) {
    summaryEmoji.textContent = "🛡️";
    summaryMessage.textContent = "Outstanding! Security expert!";
  } else if (avgScore >= 2.5) {
    summaryEmoji.textContent = "🔒";
    summaryMessage.textContent = "Great effort! Solid security knowledge.";
  } else {
    summaryEmoji.textContent = "📚";
    summaryMessage.textContent = "Good try! Keep learning about security!";
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
