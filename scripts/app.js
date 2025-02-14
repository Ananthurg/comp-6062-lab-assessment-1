console.log('JS loaded!!');


const studentFullName = 'AnanthaKrishnan Radhakrishnan Nair';
const studentNumber = 1191661;

const result = `AnanthaKrishnan Radhakrishnan Nair - ${studentNumber}`
console.log(result);


let headerContent = document.querySelector("h1");
console.log(headerContent.textContent);

console.log(headerContent.textContent);

headerContent.textContent = result;

headerContent.classList.add("headingPrimary");

console.log(headerContent.classList);