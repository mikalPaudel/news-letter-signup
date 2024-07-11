const email = document.getElementsById('email').value.trim();

  // Email Validation
  if (!isValidEmail(email)) {
    isValid = false;
    showAlert('#email', 'Please enter a valid email address. This field is required.');
    document.getElementById('email').style.border = '1px solid red';
  } else {
    document.getElementById('email').style.border = '1px solid grey';
    window.location.href = 'success.html';
  }


// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }