window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("nav");
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
  for (let j = 0; j < 5; j++) {
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

document.querySelector("#well").addEventListener("mouseover", embed);

function embed() {
  document.querySelector("#ava").style.margin = "0%";
  document.querySelector("#ava").style.justifyContent = "center";
}

document.querySelectorAll(".into")[0].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[1].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[2].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[3].addEventListener("mouseover", remove);
document.querySelectorAll(".into")[4].addEventListener("mouseover", remove);

function remove() {
  document.querySelector("#ava").style.margin = "-8%";
  document.querySelector("#ava").style.justifyContent = "flex-start";
  document.querySelector("#ava").style.transition = "all 500ms";
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
// *********************

window.addEventListener("mousemove", function (e) {
  var to_append = document.getElementsByClassName("loader-container")[0];
  var all = document.getElementsByClassName("loader-container");

  var parent_div = document.createElement("div");
  parent_div.className = "loader-container";
  var inner_div = document.createElement("div");
  inner_div.className = "loader";
  parent_div.appendChild(inner_div);
  var d = document.body.appendChild(parent_div);

  parent_div.style.left = e.clientX - 50 + "px";
  parent_div.style.top = e.clientY - 50 + "px";

  if (document.getElementsByClassName("loader-container").length > 50) {
    document.body.removeChild(to_append);
  }
});
