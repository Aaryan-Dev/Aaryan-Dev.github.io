window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("navbar");
// var bar = document.getElementById("bar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // bar.classList.add("stickybar");
  } else {
    header.classList.remove("sticky");
    // bar.classList.remove("stickybar");
  }
}

const link = document.querySelectorAll(".into");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", () => mouseOver(i));
}

function mouseOver(i) {
  for (let j = 0; j < 5; j++) {
    if (j !== i) {
      document.querySelectorAll(".into")[j].style.opacity = 0;
      document.querySelectorAll(".into")[j].style.transition = "all 0s";
    } else {
      document.querySelectorAll(".into")[i].style.opacity = 1;
    }
  }
}

const but = document.querySelectorAll('[class="no"]');

for (let i = 0; i < but.length; i++) {
  but[i].addEventListener("mouseover", defa);
  // console.log(but[i]);
}

function defa() {
  for (let i = 0; i < link.length; i++) {
    document.querySelectorAll(".into")[i].style.opacity = 1;
  }
}

document.querySelector("#well").addEventListener("mouseover", embed);

function embed() {
  document.querySelector("main").style.margin = "0%";
  document.querySelector("main").style.justifyContent = "center";
  document.querySelector("main").style.transition = "all 1s";
}

document.querySelectorAll(".into")[0].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[1].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[2].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[3].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[4].addEventListener("mouseover", remove);

function remove() {
  document.querySelector("main").style.marginTop = "-100%";
  document.querySelector("main").style.justifyContent = "flex-start";
  document.querySelector("main").style.transition = "all 0ms";
}

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const res = document.getElementById("res");

  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  // console.log(angleDeg);

  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    res.style.color = `rgba(${128}, ${angleDeg + 270}, ${angleDeg + 560}, ${
      angleDeg + 680
    })`;
  });
});

// **************

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const fade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fadein");
    } else {
      // entry.target.classList.remove("fadein");
    }
  });
});

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((el) => fade.observe(el));

// var modal = document.querySelector("#id01");
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function myToggle() {
  navigator.clipboard.writeText(
    "https://drive.google.com/file/d/1J702XqJfj8BlrsoC78V8JZX-knTO2wBv/view?usp=share_link"
  );

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Link copied ✔️";
  tooltip.style.background = "white";
}
