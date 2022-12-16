const grid = document.querySelector('#grid')
const sqaures = document.querySelectorAll('.square')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')

let result = 0
let timer = 10
let randomHit
let moveInterval


function randomSquare() {
    sqaures.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = sqaures[Math.floor(Math.random() * 9)] //return index 1,2,3
    randomSquare.classList.add('mole')

    let randomHit = randomSquare.id //1,2,3,4,5

    sqaures.forEach(square => {
        square.addEventListener('mousedown', () => {
            if(square.id == randomHit) {
                result++
                score.innerHTML = result
                randomHit = null
            }
        })
    })
}

function moveMole() {
    moveInterval = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    timer--
    timeLeft.innerHTML = timer
    if(timer == 0) {
        clearInterval(moveInterval)
        clearInterval(countdownTimerId)
        alert(`GAME OVER! Your socre is: ${result}`)
    }
}

let countdownTimerId = setInterval(countDown, 1000)