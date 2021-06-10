let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stock-tinyhawk.png') {
      myImage.setAttribute('src','images/stock-tinyhawk-2.png');
    } else {
      myImage.setAttribute('src','images/stock-tinyhawk.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Team TinyHawk, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Team TinyHawk, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
