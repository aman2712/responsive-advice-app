const adNumber = document.getElementById("ad-number");
const quote = document.getElementById("quote");
const button = document.getElementById("button");

// functions
async function fetchAdvice() {
  const data = await fetch("https://api.adviceslip.com/advice");
  const {slip} = await data.json()
  adNumber.innerText = `Advice #${slip.id}`
  quote.innerText = `"${slip.advice}"`
}

// event listener
button.addEventListener("click", fetchAdvice);
