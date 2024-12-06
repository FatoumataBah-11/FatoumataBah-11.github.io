// JavaScript for handling form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the name and email values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a thank you message with the name of the submitter
    alert(`Thank you, ${name}! We have received your message and will get back to you shortly.`);
    
    // Optionally, clear the form after submission
    document.getElementById('contact-form').reset();
});