const fighter = ['Kamień', 'Papier', 'Nożyce'];
const defaultBotImage = 'Bot.jpg';

function setBotImage(image) {
    document.getElementById('bot-img').src = image + '.jpg';
}

function resetBotImage() {
    document.getElementById('bot-img').src = defaultBotImage;
}

function resetWynik() {
    document.getElementById("wynik").innerHTML = "Wybierz Opcję";
}

function randomChoice() {
    let randIndex = Math.floor(Math.random() * fighter.length);
    setBotImage(fighter[randIndex]);
    return fighter[randIndex];
}

function compare(playerChoice, botChoice) {
    let wynik = document.getElementById("wynik");

    if (playerChoice === botChoice) {
        wynik.innerHTML = "Wynik: Remis";
    } else if (
        (playerChoice === 'Kamień' && botChoice === 'Nożyce') ||
        (playerChoice === 'Nożyce' && botChoice === 'Papier') ||
        (playerChoice === 'Papier' && botChoice === 'Kamień')
    ) {
        wynik.innerHTML = "Wynik: Wygrałeś!";
    } else {
        wynik.innerHTML = "Wynik: Przegrałeś!";
    }
}

function gra(playerChoice) {
    let botChoice = randomChoice();
    compare(playerChoice, botChoice);

    setTimeout(() => {
        resetBotImage();
        resetWynik();
    }, 3000);
}

// Dodanie obramowania do wszystkich obrazków w grze
document.querySelectorAll('.choose img, .bot img').forEach(img => {
    img.style.border = '4px solid rgba(0, 0, 0, 0.5)';
    img.style.borderRadius = '15px';
    img.style.padding = '5px';
});