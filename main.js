const tasks = [
  { company: "ShopEase", title: "Fix Mobile Button Issue" },
  { company: "CloudSync", title: "Add Dark Mode" },
  { company: "SwiftPay", title: "Optimize Home page" },
  { company: "Meta", title: "Add new emoji 🙌" },
  { company: "Google LLC", title: "Integrate OpenAI API" },
  { company: "Digital Ocean", title: "Improve Job searching" },
];

document.getElementById("task-assigned").innerText = tasks.length;
document.getElementById("task-counter").innerText = tasks.length;
document.getElementById("current-date").innerText = new Date().toDateString();

const taskContainer = document.getElementById("task-container");

// Manually creating task elements
const task1 = `
    <div class="p-4 bg-white shadow-md rounded-xl">
      <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[0].company}</h3>
      <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[0].title}</h2>
      <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
      <button onclick="completeTask(this, '${tasks[0].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
    </div>
  `;

const task2 = `
    <div class="p-4 bg-white shadow-md rounded-xl">
      <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[1].company}</h3>
      <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[1].title}</h2>
      <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
      <button onclick="completeTask(this, '${tasks[1].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
    </div>
  `;

const task3 = `
    <div class="p-4 bg-white shadow-md rounded-xl">
      <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[2].company}</h3>
      <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[2].title}</h2>
      <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
      <button onclick="completeTask(this, '${tasks[2].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
    </div>
  `;

const task4 = `
  <div class="p-4 bg-white shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[3].company}</h3>
    <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[3].title}</h2>
    <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
    <button onclick="completeTask(this, '${tasks[3].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
`;

const task5 = `
  <div class="p-4 bg-white shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[4].company}</h3>
    <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[4].title}</h2>
    <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
    <button onclick="completeTask(this, '${tasks[4].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
`;

const task6 = `
  <div class="p-4 bg-white shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-gray-200 p-1 rounded-md inline-block">${tasks[5].company}</h3>
    <h2 class="text-lg font-bold text-blue-900 mt-2">${tasks[5].title}</h2>
    <p class="text-sm text-gray-500 mt-2">Deadline: 21 March 2025</p>
    <button onclick="completeTask(this, '${tasks[5].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
`;

// Adding tasks to the page
taskContainer.innerHTML = task1 + task2 + task3 + task4 + task5 + task6;

// Function to mark tasks as completed
function completeTask(button, taskTitle) {
  button.classList.add("opacity-50", "pointer-events-none");

  let taskCount = document.getElementById("task-assigned").innerText;
  taskCount--;
  document.getElementById("task-assigned").innerText = taskCount;
  document.getElementById("task-counter").innerText = taskCount;

  const logContainer = document.getElementById("activity-log");
  const logEntry = document.createElement("p");
  logEntry.className = "text-sm text-gray-600";
  logEntry.innerText = `${taskTitle} at ${new Date().toLocaleTimeString()}`;
  logContainer.prepend(logEntry);

  //Task assigned Zero

  if (taskCount === 0) {
    alert("✅ Successfully failed the Task");
  }
}
