const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/the-dunk.jpeg') {
    myImage.setAttribute('src','images/starks.jpeg');
  } else {
    myImage.setAttribute('src','images/the-dunk.jpeg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to The Dunk, ${myName}`;
  }
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to The Dunk, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }
  function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Welcome to The Dunk, ${myName}`;
    }
  }
     

  


  