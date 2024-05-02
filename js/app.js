

const form = document.getElementById('form');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit-button');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('close-button');

// Form submission with modal functionality
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));

    // Feedback when form is submitted (optional)
    // result.innerHTML = "Please wait...";

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        if (response.ok) { // Show the modal on successful submission
            modal.style.display = 'flex';
            form.reset(); 
        } else {
            const data = await response.json();
            result.innerHTML = `Error: ${data.message}`; // Display error message
        }
    } catch (error) {
        console.error('Error during form submission:', error);
        result.innerHTML = "An error occurred. Please try again.";
    }

    // Hide the result message after some time
    setTimeout(() => {
        result.style.display = "none";
    }, 3);
});

// Close the modal with the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal by clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});
