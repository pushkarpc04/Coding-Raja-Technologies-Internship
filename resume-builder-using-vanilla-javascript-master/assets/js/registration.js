document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch the form data
        const formData = new FormData(registrationForm);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Perform registration logic (you can send data to a server here)
        console.log('Registration Data:', userData);

        // Redirect to index.html after successful registration
        window.location.href = 'resume.html';
    });
});
