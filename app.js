var health = 100
var hits = 0
var stance = ''
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

function guard(){
  stance = 'guarded'
  document.getElementById("dummyImg").src="https://srk.shib.live/images/c/cc/%28ryulparry%29.gif"
  setTimeout(resetImg, 500)
}

function punch() {
  if (stance == 'guarded'){
    health -= 2
    draw()
    document.getElementById("dummyImg").src="https://srk.shib.live/images/c/cc/%28ryulparry%29.gif"
    document.getElementById("img").src="https://srk.shib.live/images/f/f4/%28kenmp%29.gif"
    setTimeout(resetImg, 600)
    stance = ''
  }
  else {health -= 5
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/f/f4/%28kenmp%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 600)
  stance = '' }
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function duck(){
  stance = 'ducking'
  document.getElementById("dummyImg").src="https://srk.shib.live/images/9/9b/%28ryucmp%29.gif"
  setTimeout(resetImg, 500)
}

function kick() {
  if (stance == 'ducking'){
    health -= 1
    draw()
    document.getElementById("dummyImg").src="https://srk.shib.live/images/9/9b/%28ryucmp%29.gif"
    document.getElementById("img").src="https://srk.shib.live/images/d/d1/%28kenmk%29.gif"
    setTimeout(resetImg, 600)
    stance = ''
  }
  else {health -= 3
  draw()
  document.getElementById("img").src="https://srk.shib.live/images/d/d1/%28kenmk%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 750)
  stance = ''}
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function jump(){
  stance = 'jumping'
  document.getElementById("dummyImg").src="https://srk.shib.live/images/e/e1/%28ryujump%29.gif"
  setTimeout(resetImg, 700)
}

function Hadouken() {
  if (stance == 'jumping'){
    health -= 0
    draw()
    yell()
    document.getElementById("dummyImg").src="https://srk.shib.live/images/e/e1/%28ryujump%29.gif"
    document.getElementById("img").src="https://srk.shib.live/images/2/2a/%28kenhdk%29.gif"
    setTimeout(resetImg, 600)
    stance = ''
  }
  else {health -= 50
  draw()
  yell()
  document.getElementById("img").src="https://srk.shib.live/images/2/2a/%28kenhdk%29.gif"
  document.getElementById("dummyImg").src="https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImg, 1000)
  stance = ''}
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function reset() {
  health = 100
  stance = ''
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

function yell(){
  const yellPlayer = document.getElementById('sound')
  yellPlayer.setAttribute('src', 'https://www.myinstants.com/media/sounds/hadouken.mp3')
  yellPlayer.play()
}