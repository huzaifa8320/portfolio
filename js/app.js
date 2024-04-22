const submitButton = document.getElementById('submit-button');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('close-button');

// Show the modal when submit button is clicked
submitButton.addEventListener('click', function() {
    modal.style.display = 'flex'; // Show the modal
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside the content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
