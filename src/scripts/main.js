const imgs = ["./src/img/alex.jpg", "./src/img/alex.jpg", "./src/img/celinha.jpg", "./src/img/celinha.jpg", "./src/img/eli.jpg", "./src/img/eli.jpg", "./src/img/gian.jpg", "./src/img/gian.jpg", "./src/img/izaias.jpg", "./src/img/izaias.jpg", "./src/img/lilica.jpg", "./src/img/lilica.jpg", "./src/img/pedro.jpg", "./src/img/pedro.jpg", "./src/img/rafael.jpg", "./src/img/rafael.jpg"];

let openCards = [];
let shuffleImgs = imgs.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < imgs.length; i++) {
    let box = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', imgs[i]);
    imgs[i].style = 'transform: rotateY(130deg)';
    box.appendChild(img);
    box.setAttribute('class', 'item');
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML && openCards[0] !== openCards[1]) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }

    openCards = [];

    if(document.querySelectorAll('.boxMatch').length === imgs.length) {
        alert('Parabéns!! Vc é peba mas pelo menos tem uma boa memória! kkk');
    }
}




