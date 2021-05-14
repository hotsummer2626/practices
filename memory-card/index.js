class MemoryCard {
    constructor() {
        this.hasFlippedCard = false;
        this.firstCard = null;
        this.secondCard = null;
        this.lockboard = false;
    }

    flipCard(card) {
        if (this.lockboard) return;
        if (card === this.firstCard) return;
        $(card).toggleClass('flip');
        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = card;
            return;
        }
        this.hasFlippedCard = false;
        this.secondCard = card;

        this.isMatch();
    }

    isMatch() {
        let isMatch = this.firstCard.dataset.framework === this.secondCard.dataset.framework;
        isMatch ? this.disableCard() : this.unflipCard();
    }

    disableCard() {
        $(this.firstCard).off('click');
        $(this.secondCard).off('click');
    }

    unflipCard() {
        this.lockboard = true;
        setTimeout(() => {
            $(this.firstCard).removeClass('flip');
            $(this.secondCard).removeClass('flip');
            this.resetBoard();
        }, 1000);
    }

    resetBoard() {
        this.hasFlippedCard = false;
        this.lockboard = false;
        this.firstCard = null;
        this.secondCard = null;
    }

    shuffle(card) {
        card.each(function () {
            let randomNumber = Math.floor(Math.random() * 12);
            this.style.order = randomNumber;
        });
    }
}

const $memoryCards = $('.memory-card');
const $resetButton = $('.reset');
const memoryCard = new MemoryCard();

memoryCard.shuffle($memoryCards);

$memoryCards.click(function () {
    memoryCard.flipCard(this);
});

$resetButton.click(function () {
    $memoryCards.removeClass('flip').off('click').click(function () {
        let _this = this;
        memoryCard.flipCard(_this);
    });
    $resetButton.text('reseting...');
    memoryCard.lockboard = true;
    setTimeout(() => {
        memoryCard.shuffle($memoryCards);
        memoryCard.resetBoard();
        $resetButton.text('reset');
    }, 1500);
});




