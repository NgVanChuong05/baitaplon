// Lấy ra elements của trang
const registrationForm = document.getElementById('registrationForm');
const Lastnameelement = document.getElementById('Lastname');
const Firstnameelement = document.getElementById('Firstname');
const Usernameelement = document.getElementById('Username');
const Passwordelement = document.getElementById('Password');
const Emailelement = document.getElementById('Email');
const Phoneelement = document.getElementById('Phone');
const agreeTermselement = document.getElementById('agreeTerms');
const successAlert = document.querySelector('.success-alert');

// error elements
const HoError = document.getElementById('HoError');
const TenError = document.getElementById('TenError');
const UsernameError = document.getElementById('UsernameError');
const PasswordError = document.getElementById('PasswordError');
const EmailError = document.getElementById('EmailError');
const SDTError = document.getElementById('SDTError');
const agreeTermsError = document.getElementById('agreeTermsError');

// Sự kiện submit form
registrationForm.addEventListener('submit', function(e) {
    // Chặn load lại trang
    e.preventDefault();
    
    // Reset error messages
    HoError.style.display = "none";
    TenError.style.display = "none";
    UsernameError.style.display = "none";
    PasswordError.style.display = "none";
    EmailError.style.display = "none";
    SDTError.style.display = "none";
    agreeTermsError.style.display = "none";
    
    // Validate dữ liệu đầu vào
    let isValid = true;
    
    if (!Lastnameelement.value.trim()) {
        HoError.style.display = "block";
        isValid = false;
    }
    
    if (!Firstnameelement.value.trim()) {
        TenError.style.display = "block";
        isValid = false;
    }
    
    if (!Usernameelement.value.trim()) {
        UsernameError.style.display = "block";
        isValid = false;
    }
    
    if (!Passwordelement.value.trim()) {
        PasswordError.style.display = "block";
        isValid = false;
    } else if (Passwordelement.value.length < 6) {
        PasswordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
        PasswordError.style.display = "block";
        isValid = false;
    }
    
    if (!Emailelement.value.trim()) {
        EmailError.style.display = "block";
        isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Emailelement.value)) {
        EmailError.textContent = "Email không hợp lệ";
        EmailError.style.display = "block";
        isValid = false;
    }
    
    if (!Phoneelement.value.trim()) {
        SDTError.style.display = "block";
        isValid = false;
    } else if (!/^[0-9]{10,11}$/.test(Phoneelement.value)) {
        SDTError.textContent = "Số điện thoại không hợp lệ";
        SDTError.style.display = "block";
        isValid = false;
    }
    
    if (!agreeTermselement.checked) {
        agreeTermsError.textContent = "Bạn phải đồng ý với điều khoản";
        agreeTermsError.style.display = "block";
        isValid = false;
    }
    
    // Nếu tất cả đều hợp lệ
    if (isValid) {
        // Hiển thị thông báo thành công
        successAlert.style.display = "block";
        
        // Reset form
        registrationForm.reset();
        
        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            successAlert.style.display = "none";
        }, 3000);
        
       
    }
});

// gui du lieu tu form len localstorage
if(Lastnameelement.value && 
    Firstnameelement.value &&
     Usernameelement.value &&
      Passwordelement.value && 
     validateEmail(Emailelement.value) 
    && Phoneelement.value){
console.log("submits");
}
    