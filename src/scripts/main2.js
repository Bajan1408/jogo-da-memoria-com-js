
const imgs = ['🐶', '🐶', '🐺', '🐺', '🦁', '🦁', '🐯', '🐯', '🐗', '🐗', '🐷', '🐷', '🐮', '🐮', '🐹', '🐹'];
let openCards = [];
let shuffleImgs = imgs.sort(() => (Math.random() > 0.5 ? 2 : -1));


for(let i = 0; i < imgs.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleImgs[i];
    document.querySelector('.game').appendChild(box);
}

