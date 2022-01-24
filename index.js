let play = document.querySelector(".play");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let img = document.querySelector("img");
let head = document.querySelector("h2");
let para = document.querySelector("p");
var flag = false;
var count = 1;
var audio = new Audio("m1.mp3");

play.addEventListener("click", function () {
  if (!flag) {
    audio.play();
    play.innerHTML = `<i class="fas fa-pause-circle"></i>`;
    flag = true;
  } else {
    play.innerHTML = `<i class="fas fa-play-circle"></i>`;
    audio.pause();
    flag = false;
  }
});

next.addEventListener("click", function () {
  var name = "";
  var songname = "";
  if (count < 5) {
    count++;
  } else {
    count = 1;
  }
  switch (count) {
    case 1:
      name = "AP Dhillon";
      songname = "Chad Gussa";
      break;
    case 2:
      name = "AP Dhillon";
      songname = "Excuses";
      break;
    case 3:
      name = "Siddhu Moosewala";
      songname = "295_";
      break;
    case 4:
      name = "Siddhu Moosewala";
      songname = "Calaboose";
      break;
    case 5:
      name = "Siddhu Moosewala";
      songname = "These Days";
      break;
  }
  var source = "m" + count + ".mp3";
  var imgsource = "img" + count + ".jpg";
  audio.pause();
  play.innerHTML = `<i class="fas fa-play-circle"></i>`;
  head.innerHTML = name;
  para.innerHTML = songname;
  img.setAttribute("src", imgsource);
  audio = new Audio(source);
});

prev.addEventListener("click", function () {
  if (count > 1) {
    count--;
  } else {
    count = 1;
  }

  var source = "m" + count + ".mp3";
  var imgsource = "img" + count + ".jpg";
  audio.pause();
  play.innerHTML = `<i class="fas fa-play-circle"></i>`;

  img.setAttribute("src", imgsource);
  audio = new Audio(source);
});
