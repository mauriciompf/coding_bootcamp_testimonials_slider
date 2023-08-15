const obj = [
    {
        id: 1,
        text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
        name: "Tanya Sinclair",
        role: "UX Engineer",
        image: "./assets/images/image-tanya.jpg"
    },
    {
        id: 2,
        text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        name: "John Tarkpor",
        role: "Junior Front-end Developer",
        image: "./assets/images/image-john.jpg"
    }
]

const buttonPrev = document.querySelector('[data-prev]');
const buttonNext = document.querySelector('[data-next]');

const testimonialText = document.querySelector('[data-testimonial]');
const nameText = document.querySelector("[data-name]");
const roleText = document.querySelector("[data-role]");
const imageText = document.querySelector('[data-image]');

let currentText = 0;
let maxLength = obj.length - 1;

buttonPrev.addEventListener("click", () => {
    currentText == 0 
        ? currentText = maxLength
        : currentText--;

    displayText();
})

buttonNext.addEventListener("click", () => {
    currentText === maxLength
        ? currentText = 0
        : currentText++;

    displayText();
})

function displayText() {
    nameText.textContent = obj[currentText].name;
    roleText.textContent = obj[currentText].role;
    testimonialText.textContent = obj[currentText].text;
    imageText.src = obj[currentText].image;
    imageText.alt = obj[currentText].name;
}