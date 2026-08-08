const BIBLE_WORDS_DATA = [
  // Easy
  { 
    word: "Noah", 
    difficulty: "Easy", 
    emoji: "🚢🌧️🕊️", 
    meaning: "Build yourself an ark of gopher wood. (Genesis 6:14)" 
  },
  { 
    word: "David and Goliath", 
    difficulty: "Easy", 
    emoji: "👑🪨🎯", 
    meaning: "You come against me with sword and spear, but I come against you in the name of the Lord Almighty. (1 Samuel 17:45)" 
  },
  { 
    word: "Adam and Eve", 
    difficulty: "Easy", 
    emoji: "🍎🐍🌴", 
    meaning: "Did God really say, 'You must not eat from any tree in the garden'? (Genesis 3:1)" 
  },
  { 
    word: "Daniel", 
    difficulty: "Easy", 
    emoji: "🦁🔒🙏", 
    meaning: "My God sent his angel, and he shut the mouths of the lions. (Daniel 6:22)" 
  },
  { 
    word: "Moses", 
    difficulty: "Easy", 
    emoji: "🌊🪵📜", 
    meaning: "Let my people go! (Exodus 5:1)" 
  },
  { 
    word: "Jonah", 
    difficulty: "Easy", 
    emoji: "🐋🌊🫧", 
    meaning: "From inside the fish Jonah prayed to the Lord his God. (Jonah 2:1)" 
  },
  { 
    word: "Jesus", 
    difficulty: "Easy", 
    emoji: "✝️👑🍞", 
    meaning: "I am the way and the truth and the life. No one comes to the Father except through me. (John 14:6)" 
  },
  { 
    word: "Samson", 
    difficulty: "Easy", 
    emoji: "💪💇‍♂️🏛️", 
    meaning: "If my head were shaved, my strength would leave me, and I would become as weak as any other man. (Judges 16:17)" 
  },
  { 
    word: "Abraham", 
    difficulty: "Easy", 
    emoji: "⭐🌌🗡️", 
    meaning: "Look up at the sky and count the stars—if indeed you can count them. So shall your offspring be. (Genesis 15:5)" 
  },
  { 
    word: "Peter", 
    difficulty: "Easy", 
    emoji: "🎣🌊🐓", 
    meaning: "Before the rooster crows, you will disown me three times. (Matthew 26:34)" 
  },
  { 
    word: "Paul", 
    difficulty: "Easy", 
    emoji: "🐴⚡📜", 
    meaning: "Saul, Saul, why do you persecute me? (Acts 9:4)" 
  },
  { 
    word: "John the Baptist", 
    difficulty: "Easy", 
    emoji: "🌊🦗👔", 
    meaning: "Repent, for the kingdom of heaven has come near. (Matthew 3:2)" 
  },
  { 
    word: "Mary and Martha", 
    difficulty: "Easy", 
    emoji: "🧹🥘👣", 
    meaning: "Martha, Martha, you are worried and upset about many things, but few things are needed. (Luke 10:41-42)" 
  },
  { 
    word: "Solomon", 
    difficulty: "Easy", 
    emoji: "👑⚔️👶", 
    meaning: "Give your servant a discerning heart to govern your people and to distinguish between right and wrong. (1 Kings 3:9)" 
  },
  { 
    word: "Lazarus", 
    difficulty: "Easy", 
    emoji: "🪨🧻🌅", 
    meaning: "Lazarus, come out! (John 11:43)" 
  },
  { 
    word: "Joshua", 
    difficulty: "Easy", 
    emoji: "🧱🎺☀️", 
    meaning: "Sun, stand still over Gibeon, and moon, over the Valley of Aijalon. (Joshua 10:12)" 
  },
  { 
    word: "Nativity", 
    difficulty: "Easy", 
    emoji: "👶⭐🐄", 
    meaning: "For unto us a child is born, unto us a son is given. (Isaiah 9:6)" 
  },
  { 
    word: "Feeding of the 5000", 
    difficulty: "Easy", 
    emoji: "🍞🐟🧺", 
    meaning: "We have here only five loaves of bread and two fish. (Matthew 14:17)" 
  },
  { 
    word: "Wisemen", 
    difficulty: "Easy", 
    emoji: "🐫⭐🎁", 
    meaning: "Where is the one who has been born king of the Jews? We saw his star when it rose and have come to worship him. (Matthew 2:2)" 
  },
  { 
    word: "Judas Iscariot", 
    difficulty: "Easy", 
    emoji: "🪙💋🌳", 
    meaning: "The one I kiss is the man; arrest him. (Matthew 26:48)" 
  },

  // Medium
  { 
    word: "Tower of Babel", 
    difficulty: "Medium", 
    emoji: "🏗️🗣️🌍", 
    meaning: "Come, let us build ourselves a city, with a tower that reaches to the heavens. (Genesis 11:4)" 
  },
  { 
    word: "Zacchaeus", 
    difficulty: "Medium", 
    emoji: "🪵🌳💰", 
    meaning: "Hurry and come down, for I must stay at your house today. (Luke 19:5)" 
  },
  { 
    word: "The Good Samaritan", 
    difficulty: "Medium", 
    emoji: "🩹🐴🏨", 
    meaning: "Go and do likewise. (Luke 10:37)" 
  },
  { 
    word: "Gideon", 
    difficulty: "Medium", 
    emoji: "🪔🎺🧱", 
    meaning: "A sword for the Lord and for Gideon! (Judges 7:20)" 
  },
  { 
    word: "Queen Esther", 
    difficulty: "Medium", 
    emoji: "👑📜🍷", 
    meaning: "And who knows but that you have come to your royal position for such a time as this? (Esther 4:14)" 
  },
  { 
    word: "Joseph", 
    difficulty: "Medium", 
    emoji: "🧥🌾👑", 
    meaning: "You intended to harm me, but God intended it for good to accomplish what is now being done. (Genesis 50:20)" 
  },
  { 
    word: "Elijah", 
    difficulty: "Medium", 
    emoji: "🔥🐂🌧️", 
    meaning: "Answer me, Lord, answer me, so these people will know that you, Lord, are God. (1 Kings 18:37)" 
  },
  { 
    word: "Prodigal Son", 
    difficulty: "Medium", 
    emoji: "🐖💰🫂", 
    meaning: "For this son of mine was dead and is alive again; he was lost and is found. (Luke 15:24)" 
  },
  { 
    word: "Parting of the Red Sea", 
    difficulty: "Medium", 
    emoji: "🌊🦯🚶‍♂️", 
    meaning: "Raise your staff and stretch out your hand over the sea to divide the water so that the Israelites can go through the sea on dry ground. (Exodus 14:16)" 
  },
  { 
    word: "Walls of Jericho", 
    difficulty: "Medium", 
    emoji: "🎺🧱💥", 
    meaning: "When the trumpets sounded, the army shouted, and at the sound of the trumpet, when the men gave a loud shout, the wall collapsed. (Joshua 6:20)" 
  },
  { 
    word: "Sermon on the Mount", 
    difficulty: "Medium", 
    emoji: "⛰️📜🕊️", 
    meaning: "Blessed are the meek, for they will inherit the earth. (Matthew 5:5)" 
  },
  { 
    word: "Golden Calf", 
    difficulty: "Medium", 
    emoji: "🔥🐮💃", 
    meaning: "These are your gods, O Israel, who brought you up out of Egypt. (Exodus 32:4)" 
  },
  { 
    word: "Thomas", 
    difficulty: "Medium", 
    emoji: "❓🖐️🩺", 
    meaning: "Unless I see the nail marks in his hands and put my finger where the nails were, I will not believe. (John 20:25)" 
  },
  { 
    word: "Ananias and Sapphira", 
    difficulty: "Medium", 
    emoji: "💰🤐💀", 
    meaning: "How is it that Satan has so filled your heart that you have lied to the Holy Spirit? (Acts 5:3)" 
  },
  { 
    word: "Nicodemus", 
    difficulty: "Medium", 
    emoji: "🌙👑👶", 
    meaning: "Very truly I tell you, no one can see the kingdom of God unless they are born again. (John 3:3)" 
  },
  { 
    word: "Woman at the Well", 
    difficulty: "Medium", 
    emoji: "🛢️💧🏞️", 
    meaning: "Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst. (John 4:13-14)" 
  },
  { 
    word: "Deborah", 
    difficulty: "Medium", 
    emoji: "🌴⚖️⚔️", 
    meaning: "I will certainly go with you. But because of the course you are taking, the honor will not be yours. (Judges 4:9)" 
  },
  { 
    word: "Walking on Water", 
    difficulty: "Medium", 
    emoji: "👟🌊⛵", 
    meaning: "Lord, if it’s you, tell me to come to you on the water. (Matthew 14:28)" 
  },
  { 
    word: "Pentecost", 
    difficulty: "Medium", 
    emoji: "🔥🗣️💨", 
    meaning: "All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them. (Acts 2:4)" 
  },
  { 
    word: "Transfiguration", 
    difficulty: "Medium", 
    emoji: "⛰️☀️☁️", 
    meaning: "His face shone like the sun, and his clothes became as white as the light. (Matthew 17:2)" 
  },
  { 
    word: "Parable of the Sower", 
    difficulty: "Medium", 
    emoji: "🌱🪨🌾", 
    meaning: "A farmer went out to sow his seed... (Matthew 13:3)" 
  },
  { 
    word: "Parable of the Lost Sheep", 
    difficulty: "Medium", 
    emoji: "🐑🌲🔍", 
    meaning: "Rejoice with me; I have found my lost sheep. (Luke 15:6)" 
  },

  // Hard
  { 
    word: "Balaam", 
    difficulty: "Hard", 
    emoji: "🫏🗣️🦯", 
    meaning: "What have I done to you to make you beat me these three times? (Numbers 22:28)" 
  },
  { 
    word: "Elisha", 
    difficulty: "Hard", 
    emoji: "🪓🌊🐻", 
    meaning: "Please let a double portion of your spirit be upon me. (2 Kings 2:9)" 
  },
  { 
    word: "Stephen", 
    difficulty: "Hard", 
    emoji: "🪨☁️🕊️", 
    meaning: "Lord, do not hold this sin against them. (Acts 7:60)" 
  },
  { 
    word: "Nehemiah", 
    difficulty: "Hard", 
    emoji: "🧱🛠️👑", 
    meaning: "I am doing a great work and I cannot come down. (Nehemiah 6:3)" 
  },
  { 
    word: "Shadrach Meshach Abednego", 
    difficulty: "Hard", 
    emoji: "🔥🚶‍♂️4️⃣", 
    meaning: "Look! I see four men walking around in the fire, unbound and unharmed, and the fourth looks like a son of the gods. (Daniel 3:25)" 
  },
  { 
    word: "Ruth and Naomi", 
    difficulty: "Hard", 
    emoji: "🌾🫂🌾", 
    meaning: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. (Ruth 1:16)" 
  },
  { 
    word: "Jacob wrestling God", 
    difficulty: "Hard", 
    emoji: "🤼‍♂️🌅🦴", 
    meaning: "I will not let you go unless you bless me. (Genesis 32:26)" 
  },
  { 
    word: "Job", 
    difficulty: "Hard", 
    emoji: "🌋🏚️💨", 
    meaning: "The Lord gave and the Lord has taken away; may the name of the Lord be praised. (Job 1:21)" 
  },
  { 
    word: "Belshazzar's Feast", 
    difficulty: "Hard", 
    emoji: "🍷✍️🧱", 
    meaning: "Mene, Mene, Tekel, Parsin. (Daniel 5:25)" 
  },
  { 
    word: "Ehud", 
    difficulty: "Hard", 
    emoji: "🗡️🫄🪑", 
    meaning: "I have a message from God for you. (Judges 3:20)" 
  },
  { 
    word: "Melchizedek", 
    difficulty: "Hard", 
    emoji: "👑🍞🍷", 
    meaning: "King of Salem and priest of God Most High, who brought out bread and wine. (Genesis 14:18)" 
  },
  { 
    word: "Hosea", 
    difficulty: "Hard", 
    emoji: "💍💔❤️", 
    meaning: "Go, show your love to your wife again, though she is loved by another man and is an adulteress. (Hosea 3:1)" 
  },
  { 
    word: "Jephthah's Vow", 
    difficulty: "Hard", 
    emoji: "🗣️⚠️👧", 
    meaning: "If you give the Ammonites into my hands, whatever comes out of the door of my house to meet me... will be the Lord's. (Judges 11:30-31)" 
  },
  { 
    word: "Philip and the Ethiopian", 
    difficulty: "Hard", 
    emoji: "🛞📜🌊", 
    meaning: "Do you understand what you are reading? (Acts 8:30)" 
  },
  { 
    word: "Paul's Shipwreck", 
    difficulty: "Hard", 
    emoji: "⛵⛈️🐍", 
    meaning: "Keep up your courage, men, for I have faith in God that it will happen just as he told me. (Acts 27:25)" 
  },
  { 
    word: "Eutychus", 
    difficulty: "Hard", 
    emoji: "🪟😴🩺", 
    meaning: "Seated in a window was a young man named Eutychus, who was sinking into a deep sleep as Paul talked on and on. (Acts 20:9)" 
  },
  { 
    word: "Uzzah and the Ark", 
    difficulty: "Hard", 
    emoji: "📦🐂⚡", 
    meaning: "Uzzah reached out his hand to the ark of God and took hold of it... The Lord's anger burned against Uzzah. (2 Samuel 6:6-7)" 
  },
  { 
    word: "Achan", 
    difficulty: "Hard", 
    emoji: "💰🧥🪨", 
    meaning: "I saw among the spoils a beautiful robe from Babylonia, two hundred shekels of silver and a bar of gold... I coveted them and took them. (Joshua 7:21)" 
  },
  { 
    word: "Road to Emmaus", 
    difficulty: "Hard", 
    emoji: "🚶‍♂️🚶‍♂️🍞", 
    meaning: "Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us? (Luke 24:32)" 
  },
  { 
    word: "Cornelius and Peter", 
    difficulty: "Hard", 
    emoji: "📜🧺🕊️", 
    meaning: "Do not call anything impure that God has made clean. (Acts 10:15)" 
  },
  { 
    word: "Philemon and Onesimus", 
    difficulty: "Hard", 
    emoji: "⛓️✉️🤝", 
    meaning: "No longer as a slave, but better than a slave, as a dear brother. (Philemon 1:16)" 
  },
  { 
    word: "Dorcas / Tabitha", 
    difficulty: "Hard", 
    emoji: "🪡🧵🌅", 
    meaning: "Tabitha, get up. She opened her eyes, and seeing Peter she sat up. (Acts 9:40)" 
  },
  { 
    word: "Lydia of Thyatira", 
    difficulty: "Hard", 
    emoji: "🟣🧼🏛️", 
    meaning: "The Lord opened her heart to respond to Paul’s message. (Acts 16:14)" 
  },
  { 
    word: "Four Horsemen of the Apocalypse", 
    difficulty: "Hard", 
    emoji: "🐎🏹⚔️", 
    meaning: "I looked, and there before me was a white horse! Its rider held a bow, and he was given a crown... (Revelation 6:2)" 
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