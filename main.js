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
var toggleInterval;

    function startToggle() {
      toggleInterval = setInterval(toggleColor, 1000);
    }

    function stopToggle() {
      clearInterval(toggleInterval);
    }

    function toggleColor() {
    var exercise2 = document.getElementById("ex2");

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
  if (button.getAttribute('disabled') === null) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
});

field.addEventListener("click", function(event) {
  if (button.getAttribute('disabled') === null) {
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
      if (event.code === "ArrowRight"&& !gifRunning) {
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


////////////////Events propagation, stopping and preventing default
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', event => {
    if (image.offsetWidth === 300) {
      image.style.border = '1px solid red';
    } else {
      event.stopPropagation();
    }
  });
});
console.log();
document.addEventListener('click', event => {
  console.log('You clicked on: ' + event.target.tagName);
});