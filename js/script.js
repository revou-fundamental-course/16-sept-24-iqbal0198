// Scroll to sections when navbar items are clicked
document.querySelector('nav ul').addEventListener('click', function(event) {
    if (event.target.textContent === 'Message Us') {
        document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
    } else if (event.target.textContent === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Filling in the user's name on the welcome text
document.addEventListener('DOMContentLoaded', function() {
    const userName = prompt('What is your name?');
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = `Hi ${userName}, Welcome to Website`;
});

// Form validation and display message inside textarea
const form = document.getElementById('messageForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (!name || !dob || !gender || !message) {
        alert('All fields are required!');
        return;
    }

    // Displaying the form data inside textarea
    const formOutput = document.getElementById('formOutput');
    formOutput.value = `
        Name: ${name}
        Date of Birth: ${dob}
        Gender: ${gender}
        Message: ${message}
    `;

   
    
});
