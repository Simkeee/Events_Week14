///////////Event Handlers from HTML////////////////
////////////////Basic///////////////////////
var exercise1 = document.getElementById("ex1");

function toggleBgcolor(){
    if(exercise1.style.backgroundColor == "blue"){
        exercise1.style.backgroundColor = "green";
    }else{
        exercise1.style.backgroundColor = "blue"
    }
    
}

////////////////Advance///////////////////////
const exercise2 = document.getElementById("ex2");
const btn3 = document.getElementById("btn3");
const btn2 = document.getElementById("btn2");
var toggleInterval;

btn2.addEventListener('click',  function () {
if (btn2.textContent == "Turn off") {
  btn2.textContent = "Turn on";
  btn2.style.backgroundColor="Aqua";
  btn2.style.color="Black";
  clearInterval(toggleInterval);
} else {
  btn2.textContent = "Turn off";
  clearInterval(toggleInterval);
  toggleInterval = setInterval(toggleColor, 1000);
  btn2.style.backgroundColor="rgb(198, 68, 68)";
      }
})
btn3.addEventListener('click',  function () {
  clearInterval(toggleInterval);
  toggleInterval = setInterval(toggleColor, 1000);
})
function toggleColor() {
  if (exercise2.style.backgroundColor == "blue") {
      exercise2.style.backgroundColor = "green";
  } else {
      exercise2.style.backgroundColor = "blue";
      }
}

////Event Handlers Defined on DOM Elements (Chat Room)///////////
////////////input1////////////
const messageInput1 = document.getElementById("text-input1");
const sendButton1 = document.getElementById("btn4-1");
const messages1 = document.getElementById("messages1");

sendButton1.addEventListener("click", () => {
  const message1 = messageInput1.value;
  messageInput1.value = "";
  messages1.innerHTML += '<div>'+ message1 + '</div>';
});

////////////input2///////////////
const messageInput2 = document.getElementById("text-input2");
const sendButton2 = document.getElementById("btn4-2");
const messages2 = document.getElementById("messages2");

sendButton2.addEventListener("click", () => {
  const message2 = messageInput2.value;
  messageInput2.value = "";
  messages2.innerHTML += `<div>${message2}</div>`;
});

//////Events using eventListeners///////////
/////////Soccer://///////////
var field = document.getElementById('soccer');
var player = document.getElementById('player');
var button = document.getElementById('btn5');

button.addEventListener('click', () => {
  if (button.textContent == "Stop Moving") {
    button.textContent = "Start Moving";
    button.style.backgroundColor="Blue";
  } else {
    button.textContent = "Stop Moving";
    button.style.backgroundColor="Red";
  }
});

field.addEventListener("click", function(event) {
  if (button.textContent == "Stop Moving") {
  var x = event.clientX;
  var y = event.clientY;

  player.style.left = x + "px";
  player.style.top = y + "px";
}});


/////////Super Mario://///////////
var gifRunning = false;
var groundInterval;
var currentBackgroundPosition = '';

    document.addEventListener("keydown", function(event) {
      if (event.code === "ArrowRight" && !gifRunning) {
        gifRunning = true;
        mario.src = "Super_Mario/mario_running.gif";

        groundInterval = setInterval(function() {
          var imageElement = document.getElementById('super-mario');
          if(imageElement.style.backgroundPosition == currentBackgroundPosition){
          imageElement.style.backgroundPosition = currentBackgroundPosition -10 + 'px';
          }
          else{
            imageElement.style.backgroundPosition = currentBackgroundPosition;
          }
        }, 1000 / 20);
      }
    });
    document.addEventListener('keyup', function(event) {
      if (event.code === 'ArrowRight') {
        mario.src ="Super_Mario/mario.png";
        clearInterval(groundInterval);
        gifRunning = false;
      }
    });


    document.addEventListener('contextmenu', function() {
      if (!gifRunning) {
        gifRunning = true;
        mario.src = "Super_Mario/mario_running.gif";

        groundInterval = setInterval(function() {
          var imageElement = document.getElementById('super-mario');
          if(imageElement.style.backgroundPosition == currentBackgroundPosition){
          imageElement.style.backgroundPosition = currentBackgroundPosition -10 + 'px';
          }
          else{
            imageElement.style.backgroundPosition = currentBackgroundPosition;
          }
        }, 1000 / 20);
      }
    });
    document.addEventListener('mousedown', function() {
        mario.src ="Super_Mario/mario.png";
        clearInterval(groundInterval);
        gifRunning = false;
      });

////////////////Events propagation, stopping and preventing default
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', event => {
    if (image.offsetWidth === 300) {
      if(image.style.border == '2px solid red'){
        image.style.border = '0px solid red';}
      else{
        image.style.border = '2px solid red';
      }
    }
  });
});
console.log();
document.addEventListener('click', event => {
  console.log('You clicked on: ' + event.target.tagName);
});