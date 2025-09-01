document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    let valid = true;
    let message = '';

    if(name === '') {
        message += 'Name is required.\n';
        valid = false;
    }

    if(email === '') {
        message += 'Email is required.\n';
        valid = false;
    } else if(!/^\S+@\S+\.\S+$/.test(email)) {
        message += 'Email format is invalid.\n';
        valid = false;
    }

    if(comments === '') {
        message += 'Comments are required.\n';
        valid = false;
    }

    if(!valid) {
        alert(message);
        e.preventDefault();
    }
});
