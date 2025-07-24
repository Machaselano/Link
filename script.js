const text = [
  "📍 Content Creator",
  "🎨 Freelance",
  "    Video Grafer",
  "🚀 Open for Collab!"
];

let index = 0;
let charIndex = 0;
const typingTarget = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingTarget.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1800);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingTarget.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
