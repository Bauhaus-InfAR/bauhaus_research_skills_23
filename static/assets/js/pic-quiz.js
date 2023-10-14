// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const quizContainer = document.getElementById("pic-quiz");
let order = [];

for (let i = 0; i < quizContainer.childElementCount; i++) {
order.push(i)
}

order = shuffle(order);

let divs = []
console.log(order);
for (const i of order) {
   const div = quizContainer.querySelectorAll("p")[i]
   div.setAttribute("lab", letters.shift())
   div.firstChild.addEventListener("click", e => {
        const correctLab = document.createElement("DIV")
        correctLab.classList.add("correct-label")
        correctLab.innerHTML = e.target.dataset.correct
        e.target.parentElement.appendChild(correctLab)
   }, {"once": true})
   divs.push(div)
}

for (const i of divs) {
    quizContainer.appendChild(i)    
}
  