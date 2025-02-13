const messages = [
    "You make my heart skip a beat! 💓",
    "Every moment with you is magical ✨",
    "You're the sweetest part of my day 🌹",
    "My heart beats only for you 💝",
    "You're my perfect match 💑"
];

let currentMessage = 0;
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const messageElement = document.querySelector('.message');
const nextMessageButton = document.getElementById('nextMessage');
const closeButton = document.getElementById('closeButton');

function typeMessage(message) {
    let index = 0;
    messageElement.textContent = '';
    
    function type() {
        if (index < message.length) {
            messageElement.textContent += message[index];
            index++;
            setTimeout(type, 50);
        }
    }
    type();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heart);
    
    heart.addEventListener('animationend', () => heart.remove());
}

function showHearts() {
    for (let i = 0; i < 6; i++) {
        setTimeout(createHeart, i * 300);
    }
}

envelopeWrapper.addEventListener('click', function(e) {
    if (!this.classList.contains('open') && 
        !e.target.matches('button')) {
        this.classList.add('open');
        setTimeout(() => {
            typeMessage(messages[currentMessage]);
            showHearts();
        }, 600);
    }
});

nextMessageButton.addEventListener('click', () => {
    currentMessage = (currentMessage + 1) % messages.length;
    typeMessage(messages[currentMessage]);
    showHearts();
});

closeButton.addEventListener('click', () => {
    envelopeWrapper.classList.remove('open');
    messageElement.textContent = '';
});

// Create random hearts occasionally
setInterval(() => {
    if (Math.random() > 0.9) {
        createHeart();
    }
}, 2000);