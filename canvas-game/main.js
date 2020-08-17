let scoreOutput = document.querySelector(".multiply")
let startButton = document.querySelector(".start-crash")
var canvas = document.getElementById('crash-chart');
var ctx = canvas.getContext('2d');
var xPath = 0;
var yPath = 500
var multiply = 1
let velocity = 0.001
let gameOver = false
// ctx.moveTo(0, 500)
// ctx.lineTo(1000, 0)
// ctx.stroke()

var x = 0
var y = 500
function generateRandom(){
    randomNumber = Math.random()*(4 - 1) + 1
    return randomNumber
}
// var randomNumber = Math.random()*(5 - 1) + 1
// console.log(randomNumber)

function draw() {
    if (multiply-randomNumber  >= 0 ) {
        console.log('Конец игры')
        ctx.strokeStyle = "red"
        scoreOutput.style.color = "red"
        ctx.moveTo(0, 500)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.closePath()
        gameOver = true
        ctx.fillStyle = "red";
        ctx.font = "normal 12pt Arial";
        ctx.textAlign = "center";
        ctx.fillText(`График обвалился на ${multiply.toFixed(2)}x`, 1000/2, 500/2);
        y = 500
        x = 0
        multiply = 1
        velocity = 0.001
        return
    }
    ctx.clearRect(0, 0, 1000, 500);
    if (y >= 0) {
        velocity = velocity + 0.00001
        multiply = multiply + velocity
        x = x + 1
        y = y - 0.5
        ctx.beginPath()
        ctx.lineWidth = "3"
        if (multiply <= 1.5) {
            ctx.strokeStyle = "red"
            scoreOutput.style.color = "red"
        }
        else if (multiply <= 2 && multiply > 1.5) {
            ctx.strokeStyle = "blue"
            scoreOutput.style.color = "blue"
        }
        else if (multiply <= 3 && multiply > 2) {
            ctx.strokeStyle = "orange"
            scoreOutput.style.color = "orange"
        }



        ctx.moveTo(0, 500)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.closePath()
        console.log('Заупустилась', x, y)
        scoreOutput.innerHTML = `<h1 class="multiply">${multiply.toFixed(2)}x</h1>`
        setTimeout(draw, 20)
    } else {
        y = 500
        x = 0
        multiply = 1
    }

}

// setInterval(draw, 20)


function Start(){
    ctx.clearRect(0, 0, 1000, 500);
    generateRandom()
    draw()
}

// Start()