// DOM Elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('Username');
const passwordInput = document.getElementById('Password');
const usernameError = document.getElementById('UsernameError');
const passwordError = document.getElementById('PasswordError');
const successAlert = document.querySelector('.success-alert');

// Constants
const DISPLAY_BLOCK = 'block';
const DISPLAY_NONE = 'none';
const PASSWORD_MIN_LENGTH = 6;
const ALERT_TIMEOUT = 3000;

// Form validation
const validateForm = () => {
    let isValid = true;
    
    // Reset errors
    UsernameError.style.display = "none";
    PasswordError.style.display = "none";

    // Validate 
    if (!usernameInput.value.trim()) {
        usernameError.textContent = 'Tên đăng nhập không được để trống';
        usernameError.style.display = DISPLAY_BLOCK;
        isValid = false;
    }

    // Validate password
    if (!passwordInput.value.trim()) {
        passwordError.textContent = 'Mật khẩu không được để trống';
        passwordError.style.display = DISPLAY_BLOCK;
        isValid = false;
    } else if (passwordInput.value.length < PASSWORD_MIN_LENGTH) {
        passwordError.textContent = `Mật khẩu phải có ít nhất ${PASSWORD_MIN_LENGTH} ký tự`;
        passwordError.style.display = DISPLAY_BLOCK;
        isValid = false;
    }

    return isValid;
};

// Form submission
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            successAlert.style.display = DISPLAY_BLOCK;
            loginForm.reset();
            
            setTimeout(() => {
                successAlert.style.display = DISPLAY_NONE;
            }, ALERT_TIMEOUT);
        }
    });
}