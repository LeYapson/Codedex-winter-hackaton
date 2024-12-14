// Pêche au Popper
const popperLure = document.getElementById('popper-lure');
let popperDirection = 1;

document.getElementById('popper-game').addEventListener('click', () => {
    popperLure.style.left = '0px';
    popperLure.style.transition = 'left 1s';
    popperDirection = 1;
    movePopper();
});

function movePopper() {
    if (popperDirection === 1) {
        popperLure.style.left = '280px';
        popperDirection = -1;
    } else {
        popperLure.style.left = '0px';
        popperDirection = 1;
    }
    setTimeout(movePopper, 1000);
}

// Pêche à l'Appât
const bait = document.getElementById('bait');
const fish = document.getElementById('fish');
let baitCaught = false;

document.getElementById('bait-game').addEventListener('click', () => {
    bait.style.left = '100px';
    bait.style.transition = 'left 1s';
    fish.style.bottom = '0px';
    fish.style.transition = 'bottom 1s';
    baitCaught = false;
    checkBaitCaught();
});

function checkBaitCaught() {
    if (!baitCaught && parseInt(bait.style.left) === 100 && parseInt(fish.style.bottom) === 0) {
        baitCaught = true;
        fish.style.bottom = '170px';
        fish.style.transition = 'bottom 1s';
    }
}