const faqs = [
  {
    question: "What are the different ways to select an element in the DOM?",
    answer:
      "You can select DOM elements using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.",
  },
  {
    question:
      "What is the difference between innerHTML, innerText, and textContent ?",
    answer:
      "`innerHTML` returns HTML as string, `innerText` returns only visible text (respecting CSS), and `textContent` returns all text including hidden content.",
  },
  {
    question: "What is event delegation in the DOM?",
    answer:
      "Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements using event bubbling.",
  },
  {
    question: "What is event bubbling in the DOM?",
    answer:
      "Event bubbling is when an event starts from the target element and bubbles up to its ancestors, allowing parent elements to catch events triggered by child elements.",
  },
  {
    question: "How do you create, add, and remove elements using JavaScript?",
    answer:
      "Use `document.createElement()` to create, `appendChild()` or `append()` to add, and `removeChild()` or `remove()` to remove elements in JavaScript.",
  },
];

const container = document.getElementById("faqContainer");

faqs.forEach((item, index) => {
  const wrapper = document.createElement("div");
  wrapper.className =
    "border border-gray-300 rounded-xl p-4 bg-white shadow transition-all";

  const questionBtn = document.createElement("button");
  questionBtn.className =
    "flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none";
  questionBtn.innerHTML = `
      <span>${item.question}</span>
      <svg class="w-5 h-5 ml-4 transition-transform duration-300 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
    `;

  const answerDiv = document.createElement("div");
  answerDiv.className =
    "mt-2 text-gray-600 text-base leading-relaxed overflow-hidden max-h-0 transition-all duration-300";
  answerDiv.innerHTML = item.answer;

  let isOpen = false;
  questionBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
      questionBtn.querySelector("svg").classList.add("rotate-45");
    } else {
      answerDiv.style.maxHeight = "0px";
      questionBtn.querySelector("svg").classList.remove("rotate-45");
    }
  });

  wrapper.appendChild(questionBtn);
  wrapper.appendChild(answerDiv);
  container.appendChild(wrapper);
});
