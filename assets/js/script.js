
// --- Effets sonores ---
const splashSound = new Audio('./assets/sound/splash.mp3'); // Effet sonore pour le poisson
const reelSound = new Audio('./assets/sound/reel.mp3'); // Effet sonore pour ramener la ligne

// --- Initialisation ---
const fishingRod = document.getElementById('fishing-rod');
const fish = document.getElementById('fish');
const message = document.getElementById('message');

let isFishing = false;
let fishCaught = false;

// --- Événements ---
document.getElementById('cast-button').addEventListener('click', castLine);
document.getElementById('reel-button').addEventListener('click', reelLine);

// --- Fonction pour lancer la ligne ---
function castLine() {
    if (isFishing || fishCaught) return;

    isFishing = true;
    message.textContent = '🎣 Lancer de la ligne... Attendez que le poisson morde !';
    fishingRod.style.height = '200px';
    fishingRod.style.transition = 'height 1s';

    setTimeout(() => {
        if (!fishCaught) {
            fishBites();
        }
    }, Math.random() * 3000 + 2000); // Délai aléatoire pour la morsure
}

// --- Fonction pour la morsure ---
function fishBites() {
    if (!isFishing) return;

    fishCaught = true;
    splashSound.play();
    message.textContent = '🐟 Le poisson a mordu ! Ramenez la ligne rapidement !';
    fish.style.bottom = '150px'; // Le poisson monte
    fish.style.transition = 'bottom 1s';
}

// --- Fonction pour ramener la ligne ---
function reelLine() {
    if (!isFishing || !fishCaught) {
        message.textContent = '❌ Rien à ramener pour l\'instant.';
        return;
    }

    reelSound.play();
    fishingRod.style.height = '50px'; // La canne se rétracte
    fishingRod.style.transition = 'height 1s';
    fish.style.bottom = '250px'; // Le poisson remonte
    fish.style.transition = 'bottom 1s';

    setTimeout(() => {
        message.textContent = '🎉 Vous avez attrapé un poisson ! Bien joué !';
        resetGame();
    }, 1500);
}

// --- Réinitialisation ---
function resetGame() {
    isFishing = false;
    fishCaught = false;
    fishingRod.style.height = '50px';
    fish.style.bottom = '0px';
    message.textContent = '🎣 Cliquez sur "Lancer la ligne" pour commencer !';
}


