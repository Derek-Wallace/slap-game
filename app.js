var health = 100
var hits = 0
draw()



function draw() {
  let template = `${health}`
  document.getElementById("health").innerHTML = template
}


function slap() {
  health--
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/8/8d/%28kent%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/e/e7/%28ryut%29.gif"
  setTimeout(resetImg, 800)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }

}

function punch() {
  health -= 5
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/f/f4/%28kenmp%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 600)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function kick() {
  health -= 3
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/d/d1/%28kenmk%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 750)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function Hadouken() {
  health -= 50
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/2/2a/%28kenhdk%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 1000)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function reset() {
  health = 100
  draw()
}

function endGame() {
  alert("You beat the dummy!")
  reset()
}

function resetImg(){
  document.getElementById("img").src="https://srk.shib.live/images/6/69/Ken3s-stance.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/2/20/Ryu3s-stance.gif"
}