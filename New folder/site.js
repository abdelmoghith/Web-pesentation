let i = document.getElementById("main");
let other = document.getElementById("container");
let menu = document.querySelector(".dropmenu");

i.onclick = function () {
  menu.style.display = "inline";
};
other.onclick = function () {
  menu.style.display = "none";
};

let project1 = document.querySelector(".project1");
let project2 = document.querySelector(".project2");
let project3 = document.querySelector(".project3");
let project4 = document.querySelector(".project4");
let div_b = document.querySelector(".div_b");
let div_c = document.querySelector(".div_c");
let div_d = document.querySelector(".div_d");
let div_e = document.querySelector(".div_e");

let load = document.querySelector(".loader");

div_b.onclick = function () {
  load.style.display = "inline";
  setTimeout(() => {
    project1.style.display = "inline";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "none";
    load.style.display = "none";
  }, 1000);
};
div_c.onclick = function () {
  load.style.display = "inline";
  setTimeout(() => {
    project1.style.display = "none";
    project2.style.display = "inline";
    project3.style.display = "none";
    project4.style.display = "none";
    load.style.display = "none";
  }, 1000);
};

div_d.onclick = function () {
  load.style.display = "inline";
  setTimeout(() => {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "inline";
    project4.style.display = "none";
    load.style.display = "none";
  }, 1000);
};

div_e.onclick = function () {
  load.style.display = "inline";
  setTimeout(() => {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "inline";
    load.style.display = "none";
  }, 1000);
};
