<script>
function handleSubmit(event) {
    event.preventDefault()} // Prevent the default form submission

    const feedbackDiv = document.getElementById('form-feedback');
    const email = document.getElementById('contact-email').value;
    const telephone = document.getElementById('contact-telephone').value;
    const message = document.getElementById('contact-message').value;

    // Simple validation
    if (email && telephone && message) {
        // Simulate a successful submission
        feedbackDiv.textContent = 'Your message has been sent successfully!'}
        feedbackDiv.style.color = 'green';
     else {
        // Simulate an error response
        feedbackDiv.textContent = 'Please fill out all fields.'}
        feedbackDiv.style.color = 'red';
    

    // Clear the form (optional)
    document.getElementById('contact-form').reset();

</script>

