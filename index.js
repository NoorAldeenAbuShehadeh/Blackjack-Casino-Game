let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')
let player ={
    name: "NoorAldeen",
    chips: 300
}
let cards = []
let message = ""
let sum = 0
let isAlive = false
let hasBlackJack = false

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    if(randomCard === 1) return 11
    else if(randomCard > 10) return 10
    else return randomCard
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()    
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let card = 0 ; card < cards.length ; card++){
        cardsEl.textContent += cards[card] + " "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}