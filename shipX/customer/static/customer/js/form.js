// Add an event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Send a POST request to the form submission URL
    fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target)
    })
    .then(function (response) {
      // Show a success message in an alert
      alert('Thank you for your message! We will get back to you soon.');

      // Reset the form
      event.target.reset();
    })
    .catch(function (error) {
      // Show an error message in an alert
      alert('Oops ! Something went wrong. Please try again later')
    });
})