
/* adding a banner to the  */
// -------------------------------
const newBanner = document.querySelector('.nameHeader');
const banner = document.createElement("div")

banner.className = 'addBanner';
banner.textContent = 'This is a test';
banner.setAttribute(
    'style', 
    'color: black; background: #87CEFA; margin: 2rem 0');

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