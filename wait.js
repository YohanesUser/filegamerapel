document.addEventListener('DOMContentLoaded', (event) => {
    // Set a timeout to stop the spinner after 24 hours (24 * 60 * 60 * 1000 milliseconds)
    setTimeout(() => {
        // Stop the spinner by removing the animation
        const spinner = document.getElementById('spinner');
        spinner.style.animation = 'none';
        
        // Show the message
        const message = document.getElementById('spinner-message');
        message.classList.remove('hidden');
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
});
