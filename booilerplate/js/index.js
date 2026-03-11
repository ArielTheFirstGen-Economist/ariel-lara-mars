/* adding a banner to the top */
// -------------------------------
const newBanner = document.querySelector(".nameHeader");
const banner = document.createElement("div");

banner.className = "addBanner";
banner.textContent = "Portfolio";
/* banner.setAttribute(
  "style",
  "color: black; background: lightblue; margin: 2rem 0",
); */

newBanner.prepend(banner);

/* adding a copy right portion */
// -------------------------------

// this lets have the year dynamically in the footer
let today = new Date();
console.log(today);

let todayString = new Date().toDateString();
console.log(todayString);

let thisYear = today.getFullYear();
console.log(thisYear);

// this allows us to create the footer
const newFooter = document.querySelector(".copyright");
const copyRightText = document.createElement("p");
copyRightText.classList.add("copyColor");
copyRightText.textContent = `\u00A9 Ariel ${thisYear}`;

newFooter.append(copyRightText);

/* Skills section */
// -------------------------------

let skills = [
  "STATA [Advanced] | ",
  "R Studio [Advanced] |",
  "Excel [Advanced] | ",
  "Bilingual ( English / Spanish ) [Native] |",
];

const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");
skillsList.classList.add("flex-list");

for (
  let i = 0;
  // starts the counter
  i < skills.length;
  // runs along as the barrier is less then i
  i++ // adds 1 after each loop to move to the next index
) {
  const skill = document.createElement("li");
  skill.textContent = `${skills[i]}`;
  skillsList.append(skill);
}

/* Handling Message Form */
// -------------------------------

// We must select the DOM element
// Since it is a form submit will automciallty be detected
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (e) {
  event.preventDefault();
  alert("Your form was submitted!");
  console.log(e);

  const nameInput = event.target.usersNames;
  const emailInput = event.target.usersEmail;
  const messageInput = event.target.usersMessage;

  console.log(`Hello ${nameInput.value}`);
  console.log(`Email is ${emailInput.value}`);
  console.log(`Message is ${messageInput.value}`);

  const messageSelection = document.querySelector("#messages");
  const messageList = messageSelection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `               
        Name: <a href="mailto:${emailInput.value}">${nameInput.value}</a>
        <span>Message: ${messageInput.value}</span>
        `;

  messageList.appendChild(newMessage);
  /* messageForm.reset(); */

  /* Remove button */
  // -------------------------------

  const addBtn = document.querySelector("#messages");
  const removeButton = document.createElement("button");
  removeButton.className = "rvmBtn";

  removeButton.innerHTML = "<a>Reset</a>";
  removeButton.type = "button";
  addBtn.appendChild(removeButton);

  removeButton.addEventListener("click", function (e) {
    console.log(e);
    messageForm.reset();
    newMessage.remove();
    removeButton.remove();
  });
});

/* GitHub API */
// -------------------------------

async function myGithub() {
  try {
    const gitHubApi = await fetch(
      `https://api.github.com/users/ArielTheFirstGen-Economist`,
    );

    if (!gitHubApi.ok) {
      throw new Error("Request failed");
    }

    const gitHubData = await gitHubApi.json();
    console.log("success", gitHubData);

    const repoData = await fetch(gitHubData.repos_url);
    console.log("Repo Url", repoData);

    const repoNames = await repoData.json();
    console.log("Success! View your repos names!", repoNames);

    const projectSelection = document.querySelector("#Projects");
    const projectList = projectSelection.querySelector("ul");
    projectList.classList.add("pflex-list");

    for (let i = 0; i < repoNames.length; i++) {
      const project = document.createElement("li");
      project.textContent = `${repoNames[i].name}`;
      projectList.append(project);
    }
  } catch (error) {
    console.log(error.message);
  }
}

myGithub();
