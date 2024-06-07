document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, email, message });

        // Here you can add functionality to send the form data to a server
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        
        form.reset(); // Reset the form after submission
    });
});
