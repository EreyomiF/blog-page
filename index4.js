



const h1Element = document.getElementById('text-h1');
const pElement = document.getElementById('text-p');
const h1Text = "Welcome to my secret page, You have successfully logged in";
const sentences = h1Text.split(', ');

const pText ="I'm Funmilola";

let h1CharIndex = 0;
let pCharIndex = 0;

function typeText(element, text, charIndex) {
  if (charIndex < text.length) {
    element.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(function() {
      typeText(element, text, charIndex);
    }, 100); // Adjust delay here (milliseconds)
  } else if (element === h1Element) {
    setTimeout(function() {
      typeText(pElement, pText, pCharIndex);
    }, 1500); // Delay before typing p element
  }
}

typeText(h1Element, h1Text, h1CharIndex);

const typewriterElement = document.getElementById('typewriter');
const texts = [
  "A Software Engineer & Web Developer.",
  "Full Stack Developer.",
  "B.A History and International Studies."
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 60; // Adjust typing speed here (milliseconds)
let deletingSpeed = 60; // Adjust deleting speed here (milliseconds)

function typeTextTypewriter() {
  const currentText = texts[textIndex];
  let displayText = currentText.substring(0, charIndex);

  if (isDeleting) {
    displayText = currentText.substring(0, charIndex);
    charIndex--;
  } else {
    displayText = currentText.substring(0, charIndex);
    charIndex++;
  }

  if (charIndex === currentText.length + 1) {
    isDeleting = true;
    typingSpeed = 100; // Adjust typing speed during deletion
  }
  if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 60; // Reset typing speed after deletion
  }

  typewriterElement.textContent = displayText + (isDeleting ? '|' : '_'); // Display blinking cursor or underscore

  setTimeout(typeTextTypewriter, isDeleting ? deletingSpeed : typingSpeed);
}

typeTextTypewriter();
