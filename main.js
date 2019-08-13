// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
// });
// Defining text characters for the empty and full hearts for you to use later.


// Your JavaScript code goes here!

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





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
