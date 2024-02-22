

function registerUser(username, password) {
    // Send the login details to a server for authentication
    // You can use fetch or XMLHttpRequest to make an AJAX request to your server
    // Example using fetch:
    fetch('login_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => {
            if (response.ok) {
                // Redirect to the homepage or dashboard upon successful login
                window.location.href = 'index.html';
            } else {
                // Handle authentication failure (e.g., display error message)
                console.error('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    registerUser(username, password);
});



