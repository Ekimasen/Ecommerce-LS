const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
/* Hartley add */
function validateForm() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === '' || password === '') {
        alert('Please fill out all fields.');
        return false; 
    }

    
    var isLoggedIn = true;

    if (isLoggedIn) {
        
        window.location.href = "Ecommerce.html"; 

        
    } else {
        alert('Login failed. Please try again.');
        return false;
    }
}

