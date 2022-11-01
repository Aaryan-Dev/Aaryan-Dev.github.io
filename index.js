window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("navbar");
var bar = document.getElementById("bar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    bar.classList.add("stickybar");
  } else {
    header.classList.remove("sticky");
    bar.classList.remove("stickybar");
  }
}

const link = document.querySelectorAll(".into");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", () => mouseOver(i));
}

function mouseOver(i) {
  for (let j = 0; j < 4; j++) {
    if (j !== i) {
      document.querySelectorAll(".into")[j].style.opacity = 0;
      document.querySelectorAll(".into")[j].style.transition = "all 2s";
    } else {
      document.querySelectorAll(".into")[i].style.opacity = 1;
    }
  }
}

const but = document.querySelectorAll('[class="no"]');

for (let i = 0; i < but.length; i++) {
  but[i].addEventListener("mouseover", defa);
  console.log(but[i]);
}

function defa() {
  for (let i = 0; i < link.length; i++) {
    document.querySelectorAll(".into")[i].style.opacity = 1;
  }
}
