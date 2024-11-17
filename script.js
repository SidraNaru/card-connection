// class that will be responsible for all functions of the game

class CardConnections{

    // initial constructor
    constructor(time,cards){
        this.cardArray=cards;
        this.time=time;
        this.timeLeft=time;
    
    }

    // function for the game to start
    gameStart(){
        this.timeLeft=time;
        this.clicks=0;
        this.flips=0;
        
        // since I lack time I am just writing psudocode
        // first we set time and flips to 0 as the game has just begun
        // then we start flipping cards
        // if there is a match we a match variable to +1 and increment
        // if there is no match the cards are automatically flipped over
    }

    // game over function
    // if the time ran out and user did not win gameover message displayed

    // reset
    // user can replay the game whether they lost or won

    // winning function
    // nice message of winning and an option to restart
    

}

// check the game to make sure that it is not loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}


//when a person starts to play the card connect game
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}