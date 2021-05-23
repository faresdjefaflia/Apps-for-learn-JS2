var myInput = document.getElementById("txt"),
    mySelect = document.getElementById("select"),
    myBlue = document.getElementById("blue"),
    myRed = document.getElementById("red"),
    myYellow = document.getElementById("yellow"),
    myGreen = document.getElementById("green"),
    myButton = document.getElementById("btn"),
    myprint = document.getElementById("print");


myButton.onclick = function (){
  
  if (mySelect.value === myBlue.value){
    myprint.innerHTML = myInput.value;
    window.myprint.style.color = "#6bb7ec";
    window.mySelect.style.backgroundColor ="#6bb7ec"
    window.myButton.style.backgroundColor ="#6bb7ec"
  }
  else if (mySelect.value === myRed.value){
    myprint.innerHTML = myInput.value;
    window.myprint.style.color = "#ec6b6b";
    window.mySelect.style.backgroundColor ="#ec6b6b"
    window.myButton.style.backgroundColor ="#ec6b6b"
  }
  else if (mySelect.value === myYellow.value){
    myprint.innerHTML = myInput.value;
    window.myprint.style.color = "#ecc96b";
    window.mySelect.style.backgroundColor ="#ecc96b"
    window.myButton.style.backgroundColor ="#ecc96b"
  }
  else if (mySelect.value === myGreen.value){
    myprint.innerHTML = myInput.value;
    window.myprint.style.color = "#85ec6b";
    window.mySelect.style.backgroundColor ="#85ec6b"
    window.myButton.style.backgroundColor ="#85ec6b"
  }
};