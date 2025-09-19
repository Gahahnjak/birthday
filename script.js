var page1 = document.querySelector("#page-1");
var page2 = document.querySelector("#page-2");
var page3 = document.querySelector("#page-3");
var page2Btn = document.querySelectorAll(".page2-btn");

function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = (5 + Math.random() * 5) + "s";
      page1.appendChild(heart);
    

      setTimeout(() => {
        heart.remove();

      }, 10000);
    };

  setInterval(createHeart, 300);

function showPage2(){
  page1.classList.toggle("hide");
  page2.classList.toggle("hide");
};

function lightOn(){
  var topLight = document.querySelectorAll(".top-light")
  page2Btn[0].style.display="none";
  page2Btn[1].classList.toggle("hide");
  topLight.forEach(function(ele){
    ele.style.opacity="1";
  })
 page2.style.backgroundColor="#FFECF4";

};

function playMusic(){
  var audioplay = document.querySelector("audio"); 
  var musicIcon = document.querySelector(".music-icon")
  audioplay.play();
  page2Btn[1].classList.toggle("hide");
  page2Btn[2].classList.toggle("hide");
  musicIcon.classList.toggle("hide")
};

function decoration(){
  var birthdayTag = document.querySelector(".birthdayTag-box img");
  page2Btn[2].classList.toggle("hide");
  page2Btn[3].classList.toggle("hide");
  birthdayTag.style.transform="scale(1,1) ";
  birthdayTag.style.height="100%";
};

function showBallons(){

  page2Btn[3].classList.toggle("hide");
  page2Btn[4].classList.toggle("hide")
  function getRandomBrightColor() {
  // Hue: any (0–360), Saturation: high (70–100%), Lightness: mid-high (50–70%)
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 31) + 70;  // 70–100%
  const l = Math.floor(Math.random() * 21) + 50;  // 50–70%
  return `hsl(${h}, ${s}%, ${l}%)`;
  }

  function createBallon(){
  ballonEle = document.createElement("div")
  ballonEle.className="ballon";
  ballonEle.style.backgroundColor=getRandomBrightColor();
  ballonEle.style.left=Math.random() * window.innerWidth +"px";
  ballonEle.style.animationDuration = (5 + Math.random() * 5) + "s";
  page2.appendChild(ballonEle);

  setTimeout(() => {
    ballonEle.remove();
    }, 7000);
  }
  setInterval(createBallon,700);

};

function showCake(){
  var cakeImg = document.querySelector(".cake-img img");
  cakeImg.style.transform="scale(1)";
  page2Btn[4].classList.toggle("hide");
  page2Btn[5].classList.toggle("hide");
};

function showMsg(){
  var body = document.querySelector("body");
  var x = window.matchMedia("(max-width: 700px)")
  page2.classList.toggle("hide");
  page3.classList.toggle("hide");
  page3.style.transform="scale(1)"

   if (x.matches) { // If media query matches
    document.body.style.overflowY="scroll";
    document.body.style.height="150vh";
  } else {
    document.body.style.overflowY="hidden";
  }
  function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = (5 + Math.random() * 5) + "s";
      page3.appendChild(heart);
    

      setTimeout(() => {
        heart.remove();

      }, 10000);
    };

  setInterval(createHeart, 300);
};


// var cards = document.querySelectorAll("#page-3 .card")

// function cardsRoatate(){
//   cards.forEach(function(ele){
//     var random = Math.random()*10
//     ele.style.transform=`rotate(${random}deg) translateY(${random}px)`;
//     console.log (random)
//   })

// };

// // cardsRoatate();



