const colours = ["red", "blue", "green", "yellow", "white", "pink", "orange", "purple", "gray"],
      text2 = [ "RED", "BLUE", "GREEN", "YELLOW", "WHITE", "PINK", "ORANGE", "PURPLE", "GRAY"],
      text = ["BED", "DAME", "STAFF", "WILLOW", "BITES", "SINK", "CITY", "SCIENCE", "TEA" ]
let paused1 = true,
    paused2 = true,
    start1 = true,
    start2 = true,
    myVar1,
    myVar2

const n = colours.length
function stroop1() {
  let stroop_div = document.getElementById("stim1"),
      overlay = document.getElementById("overlay1")

  if (start1) {
    overlay.style.display = "none"
    start1 = false
  } else {
    overlay.style.display = "flex"
    start1 = true
  }

  if (paused1) {
      myVar1 = setInterval(myTimer, 1200)
      paused1 = false
  } else {
    clearInterval(myVar1);
    stroop_div.innerHTML = "+"
    stroop_div.style.color = "white"
    paused1 = true
  }

  function myTimer() {
    const n_text = ~~(Math.random() * n)
    let n_colour = ~~(Math.random() * n)
    while (n_text == n_colour) {
      n_colour = ~~(Math.random() * n)
    }
    stroop_div.innerHTML = text[n_text]
    stroop_div.style.color = colours[n_colour]
  }
}

function stroop2() {
  let stroop_div = document.getElementById("stim2"),
      overlay = document.getElementById("overlay2")

  if (start2) {
    overlay.style.display = "none"
    start2 = false
  } else {
    overlay.style.display = "flex"
    start2 = true
  }

  if (paused2) {
      myVar2 = setInterval(myTimer, 1200)
      paused2 = false
  } else {
    clearInterval(myVar2);
    stroop_div.innerHTML = "+"
    stroop_div.style.color = "white"
    paused2 = true
  }

  function myTimer() {
    const n_text = ~~(Math.random() * n)
    let n_colour = ~~(Math.random() * n)
    while (n_text == n_colour) {
      n_colour = ~~(Math.random() * n)
    }
    stroop_div.innerHTML = text2[n_text]
    stroop_div.style.color = colours[n_colour]
  }
}