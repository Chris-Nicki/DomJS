/* Problem Statement:
You are tasked with creating a web page that dynamically updates its content based on 
user interaction. The page should utilize JavaScript to manipulate the document 
structure and content using arrays and objects.

Task 1: Create an array containing information about different products, including 
their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
Task 2: Write a function to display the product information on the webpage dynamically.

Task 3: Implement an event listener to trigger the display of products when the page 
loads.

Expected Outcomes:

Successful creation of an array containing product information.
Proper display of product information on the webpage using JavaScript.
Implementation of an event listener to trigger the display of products upon page load.

*/

const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
  ];
  
  function displayProducts() {
    const productList = document.getElementById("product-list"); 
    productList.innerHTML = ""; 
  
    for (const product of products) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h4>${product.name}</h4>
        <p>${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(listItem);
    }
  }
  
  window.addEventListener("DOMContentLoaded", displayProducts);


/*
Objective: The aim of this assignment is to practice manipulating HTML forms dynamically using JavaScript, with a focus on handling arrays, objects, and form elements to capture user input and modify form behavior.



Problem Statement: You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.



Task 1: Create an HTML form with input fields for the user's name, email, and message.



Task 2: Write JavaScript code to handle form submissions and store user input in an object. Display the object in the console.



Task 3: Implement form validation to ensure that all required fields are filled before submission.

*/

const form = document.getElementById("user-form");
const messageDisplay = document.getElementById("message-display");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  if (!validateForm(name, email, message)) {
    return; 
  }
  const user = {
    name,
    email,
    message
  };

  console.log("User Input:", user);

  
  messageDisplay.textContent = "Form submitted successfully!";
  
}

function validateForm(name, email, message) {
  let isValid = true;

  if (name === "") {
    alert("Please enter your name.");
    isValid = false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    isValid = false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  if (message === "") {
    alert("Please enter your message.");
    isValid = false;
  }

  return isValid;
}


/*
## **3. Styling with JavaScript** **Objective:** The objective of this assignment is to 
practice manipulating CSS styles dynamically using JavaScript. By the end of this 
assignment, students should be able to apply various styling changes to HTML elements 
based on user interaction or other events. **Problem Statement:** You are tasked with 
creating a web page that demonstrates dynamic styling using JavaScript. The page should 
include HTML elements that change their appearance in response to user actions or 
events triggered by JavaScript functions. Task 1: Create an HTML structure with at 
least 5 elements that will be styled dynamically.

<div id="box" onclick="changeColor()">Click me to change color</div>


Task 2: Write JavaScript code to dynamically change the color of the box element 
when clicked. Task 3: Implement additional styling changes based on user interaction, 
such as mouse hover effects or button clicks on different HTML elements. 
**Expected Outcomes:** 
1. The HTML structure includes an element (e.g., a box) that responds to user 
interaction. 
2. JavaScript code successfully changes the color of the box element when clicked, 
providing a visual feedback mechanism. 
3. Additional styling changes, such as mouse hover effects or button clicks, are 
implemented to enhance user experience and engagement.
*/

function changeColor() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "red";
    }
  
const textElement = document.getElementById("text");

textElement.onmouseover = function() {
    this.style.color = "blue"; 
};

textElement.onmouseout = function() {
    this.style.color = "black"; 
};

function toggleFont() {
    const text = document.getElementById("text1");
    const currentFontSize = text.style.fontSize || "16px"; 
    text.style.fontSize = currentFontSize === "16px" ? "24px" : "16px"; 
    }
  
function changeOpacity(opacityValue) {
    const image = document.getElementById("image");
    image.style.opacity = opacityValue;
    }