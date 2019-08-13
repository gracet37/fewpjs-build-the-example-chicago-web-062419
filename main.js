
let body = document.querySelector('body')
let getHearts = document.getElementsByClassName('like-glyph') // returns an HTML collection

let getArray = Array.from(getHearts) //turn the HTML collection into array object

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

getArray.map(heart => { 
  heart.addEventListener("click", (event) => {
    if (event.target.innerHTML === `${EMPTY_HEART}`) {
      return event.target.innerHTML = `${FULL_HEART}`
    } else {
      return event.target.innerHTML = `${EMPTY_HEART}`
    }
})
})


