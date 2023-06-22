// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const texts = ["Python", "C++", "ML/AI","Flutter","Basic Frontend "];
let textIndex = 0;
let charIndex = 0;

function type() {
  const currentText = texts[textIndex];
  const typingText = currentText.slice(0, ++charIndex);

  document.getElementById('typing-text').textContent = typingText;

  if (typingText === currentText) {
    setTimeout(() => {
      setTimeout(erase, 1500); // Increase the delay before starting erasing
    }, 500); // Reduce the delay after completing typing
  } else {
    setTimeout(type, 100); // Reduce the typing interval for smoother effect
  }
}

function erase() {
  const currentText = texts[textIndex];
  const erasingText = currentText.slice(0, --charIndex);

  document.getElementById('typing-text').textContent = erasingText;

  if (erasingText === '') {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 1000); // Increase the delay before starting typing again
  } else {
    setTimeout(erase, 50); // Reduce the erasing interval for smoother effect
  }
}

type();

