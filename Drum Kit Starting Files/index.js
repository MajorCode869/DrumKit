btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
  document.addEventListener("keypress", function (event) {
    press = event.key;
    buttonAnimated(event.key);
    switch (press) {
      case "w":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3"
        );
        audio.play();
        break;
      case "a":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3"
        );
        audio.play();
        break;
      case "s":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3"
        );
        audio.play();
        break;
      case "d":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3"
        );
        audio.play();
        break;
      case "j":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3"
        );
        audio.play();
        break;
      case "k":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3"
        );
        audio.play();
        break;
      case "l":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3"
        );
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}
btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    key = this.innerHTML;
    buttonAnimated(key);
    switch (key) {
      case "w":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3"
        );
        audio.play();
        break;
      case "a":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3"
        );
        audio.play();
        break;
      case "s":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3"
        );
        audio.play();
        break;
      case "d":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3"
        );
        audio.play();
        break;
      case "j":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3"
        );
        audio.play();
        break;
      case "k":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3"
        );
        audio.play();
        break;
      case "l":
        var audio = new Audio(
          "/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3"
        );
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}
function buttonAnimated(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
