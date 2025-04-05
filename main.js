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
      <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[0].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[0].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light ">মোবাইলে বাটন কাজ করছে, সমস্যাটি ঠিক করে ব্যবহারকারীর জন্য স্মুথ ন্যাভিগেশন নিশ্চিত কর। </p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  28 March 2025</p>
    </div>
    <button onclick="completeTask(this, '${tasks[0].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
  `;

const task2 = `
      <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[1].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[1].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light "> ব্যবহারকারীদের চোখের আরাম ও পছন্দ অনুযায়ী ইন্টারফেসে ডার্ক মোড ফিচার যুক্ত করতে হবে।</p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  07 October 2025</p>
    </div>
    <button onclick="completeTask(this, '${tasks[1].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
  `;

const task3 = `
      <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[2].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[2].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light "> হোমপেজের লোডিং টাইম কমিয়ে আরও ফাস্ট ও ইউজার ফ্রেন্ডলি ইন্টারফেস তৈরি করতে হবে।</p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  21 March 2025</p>
    </div>
    <button onclick="completeTask(this, '${tasks[5].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
  `;

const task4 = `
   <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[5].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[3].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light "> প্ল্যাটফর্মে নতুন 🙌 ইমোজি যুক্ত করে ব্যবহারকারীর এক্সপ্রেশন অপশন বাড়াতে হবে। </p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  22 April 2025</p>
    </div>
    <button onclick="completeTask(this, '${tasks[3].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
`;

const task5 = `
    <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[4].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[4].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light "> OpenAI এপিআই ইন্টিগ্রেট করে অ্যাপটিকে আরও স্মার্ট ও AI ফিচার সমৃদ্ধ করতে হবে। </p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  19 March 2025</p>
    </div>
    <button onclick="completeTask(this, '${tasks[5].title}')" class="mt-2 bg-blue-500 text-white p-2 rounded-md">Completed</button>
  </div>
`;

const task6 = `
  <div class="p-4 bg-[#F4F7FF] shadow-md rounded-xl">
    <h3 class="text-sm font-semibold bg-[#FFFFFF] p-1 rounded-md inline-block px-2">${tasks[5].company}</h3>
    <h2 class="text-2xl font-bold text-blue-900 m-2">${tasks[5].title}</h2>
    <div class="bg-[#FFFFFF] rounded-md p-2"> 
    <p class="text-sm  p-1 rounded-md inline-block poppins-light "> চাকরি খোঁজার সিস্টেমটি ইউজার ফ্রেন্ডলি করে আরও কার্যকরভাবে সার্চ ও ফিল্টার অপশন উন্নত করতে হবে। </p>
    </div>
    <p class="text-blue-900 opacity-20" >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <div class="flex">
    <p class="text-sm text-gray-500">Deadline:  </p>
    <p class="text-sm text-gray-800 mx-1">  16 March 2025</p>
    </div>
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

  let navCount = document.getElementById("nav-counter").innerText;
  navCount++;

  document.getElementById("nav-counter").innerText = navCount;

  const logContainer = document.getElementById("activity-log");
  const logEntry = document.createElement("p");
  logEntry.className =
    "text-sm text-gray-600 py-2 pl-2 px-1 bg-[#F4F7FF] rounded-md my-1";
  logEntry.innerText = `${taskTitle} at ${new Date().toLocaleTimeString()}`;
  logContainer.prepend(logEntry);

  //Task assigned Zero

  if (taskCount === 0) {
    alert("✅ Successfully failed the Task");
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener on the image
document.getElementById("colorChanger").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});
