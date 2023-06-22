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

