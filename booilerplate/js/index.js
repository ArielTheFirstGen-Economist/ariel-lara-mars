
/* adding a banner to the  */
// -------------------------------
const newBanner = document.querySelector('.nameHeader');
const banner = document.createElement("div")

banner.className = 'addBanner';
banner.textContent = 'This is a test';
banner.setAttribute(
    'style', 
    'color: black; background: green; margin: 2rem 0');

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
const newFooter = document.querySelector('.copyright');
const copyRightText = document.createElement('p');
copyRightText.textContent = `\u00A9 Ariel ${thisYear}` ;

copyRightText.setAttribute(
    'style',
    'color: pink;');

newFooter.append(copyRightText);

/* Skills */

let skills = ['STATA [Advanced]',
    'R Studio [Advanced]',
    'Excel [Advanced]',
    'Bilingual ( English / Spanish ) [Native]']

const skillSection = document.querySelector('#skills')
const skillsList = skillSection.querySelector('ul')
skillsList.classList.add("flex-list")

for (let i = 0;
    // starts the counter
    i < skills.length;
    // runs along as the barrier is less then i
    i++
    // adds 1 after each loop to move to the next index 
    ) {
        const skill = document.createElement('li');    
        skill.textContent = `${skills[i]}`;
        skillsList.append(skill)
    } 

/* Handling Message Form */


// We must select the DOM element 
// Since it is a form submit will automciallty be detected
const messageForm = document.querySelector('form[name="leave_message"]');


messageForm.addEventListener('submit', function (e) {
    event.preventDefault();
    
    console.log(e);  
    
        const nameInput = event.target.usersNames;
        const emailInput = event.target.usersEmail;
        const messageInput = event.target.usersMessage;
        
        console.log(`Hello ${nameInput.value}`);
        console.log(`Email is ${emailInput.value}`);
        console.log(`Message is ${messageInput.value}`);
    
    const messageSelection = document.querySelector('#messages');
    const messageList = messageSelection.querySelector('ul');
    const newMessage = document.createElement('li');
        newMessage.innerHTML = `
        <a href="mailto:${emailInput.value}">${nameInput.value}</a>
        <span>${messageInput.value}</span>
        `; 
    /* alert('Your form was submitted!') */
    messageList.appendChild(newMessage);
    /* messageForm.reset(); */
});

/* Remove button */

const addBtn = document.querySelector('#messages')
const removeButton = document.createElement('button');
        removeButton.innerHTML = "<a>Remove</a>"
            addBtn.appendChild(removeButton);

removeButton.addEventListener('click', function (e) {
        console.log(e)
        const entry = removeButton.parentNode;

        console.log(entry);
        entry.remove();
});