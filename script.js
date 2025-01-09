const sunButton = document.getElementById('sunButton');
const moonButton = document.getElementById('moonButton');
const messageDiv = document.getElementById('message');
const riddleText = document.querySelector('.riddle');

// Collection of riddles with their answers and symbols
const riddles = [
    {
        text: "I come out at night,\nAnd glow with borrowed light.\nStars are my friends,\nWhile darkness never ends.\nWhat am I?",
        correctSymbol: 1,
        symbols: ["☀️", "🌙"]
    },
    {
        text: "I am not alive, but I grow;\nI don't have lungs, but I need air;\nI don't have a mouth, but water kills me.\nWhat am I?",
        correctSymbol: 0,
        symbols: ["🔥", "💧"]
    },
    {
        text: "What has keys, but no locks;\nSpace, but no room;\nYou can enter, but not go in?",
        correctSymbol: 0,
        symbols: ["⌨️", "🚪"]
    },
    {
        text: "The more you take,\nThe more you leave behind.\nWhat am I?",
        correctSymbol: 0,
        symbols: ["👣", "🎒"]
    },
    {
        text: "What gets wetter and wetter\nthe more it dries?",
        correctSymbol: 1,
        symbols: ["🧴", "🧺"]
    },
    {
        text: "I'm tall when I'm young,\nAnd short when I'm old.\nWhat am I?",
        correctSymbol: 0,
        symbols: ["🕯️", "📏"]
    },
    {
        text: "What has a head and a tail\nbut no body?",
        correctSymbol: 0,
        symbols: ["💰", "🐍"]
    },
    {
        text: "I'm always hungry;\nI must always be fed.\nThe finger I touch,\nWill soon turn red.",
        correctSymbol: 0,
        symbols: ["🔥", "🍽️"]
    },
    {
        text: "What building has\nthe most stories?",
        correctSymbol: 0,
        symbols: ["📚", "🏢"]
    },
    {
        text: "What can travel around the world\nwhile staying in a corner?",
        correctSymbol: 0,
        symbols: ["📫", "✈️"]
    },
    {
        text: "What has branches and leaves\nbut no bark?",
        correctSymbol: 0,
        symbols: ["📚", "🌳"]
    },
    {
        text: "What room do ghosts\navoid?",
        correctSymbol: 1,
        symbols: ["👻", "🛋️"]
    },
    {
        text: "What has a face and two hands\nbut no arms or legs?",
        correctSymbol: 0,
        symbols: ["⏰", "👤"]
    },
    {
        text: "What can you catch\nbut not throw?",
        correctSymbol: 1,
        symbols: ["🏈", "🤧"]
    },
    {
        text: "What kind of room\nhas no doors or windows?",
        correctSymbol: 0,
        symbols: ["🍄", "🏠"]
    },
    {
        text: "What starts with 'e',\nends with 'e',\nbut only contains one letter?",
        correctSymbol: 0,
        symbols: ["✉️", "📝"]
    },
    {
        text: "What breaks when you say it?",
        correctSymbol: 1,
        symbols: ["📢", "🤫"]
    },
    {
        text: "What can run but never walks,\nhas a mouth but never talks?",
        correctSymbol: 0,
        symbols: ["🏞️", "👟"]
    },
    {
        text: "What has many teeth\nbut cannot bite?",
        correctSymbol: 0,
        symbols: ["🧹", "🦷"]
    },
    {
        text: "What has words\nbut never speaks?",
        correctSymbol: 0,
        symbols: ["📕", "🗣️"]
    }
];

let currentRiddle = 0;

function setNewRiddle() {
    // Get random riddle that's different from current
    let newRiddle;
    do {
        newRiddle = Math.floor(Math.random() * riddles.length);
    } while (newRiddle === currentRiddle);
    
    currentRiddle = newRiddle;
    
    // Update riddle text
    riddleText.innerHTML = riddles[currentRiddle].text.replace(/\n/g, '<br>');
    
    // Update button symbols
    sunButton.textContent = riddles[currentRiddle].symbols[0];
    moonButton.textContent = riddles[currentRiddle].symbols[1];
    
    // Clear previous message
    messageDiv.textContent = '';
}

function checkAnswer(isFirstSymbol) {
    const riddle = riddles[currentRiddle];
    const isCorrect = isFirstSymbol === (riddle.correctSymbol === 0);
    
    if (isCorrect) {
        messageDiv.textContent = 'WINNER WINNER CHICKEN DINNER!';
        messageDiv.style.color = '#ffd700';
        setTimeout(setNewRiddle, 1500);
    } else {
        messageDiv.textContent = 'You smell like poo, you lose!';
        messageDiv.style.color = '#ff4444';
    }
}

sunButton.addEventListener('click', () => checkAnswer(true));
moonButton.addEventListener('click', () => checkAnswer(false));

// Initialize first riddle
setNewRiddle(); 
