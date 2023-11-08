function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone-input');
    const validationMessage = document.getElementById('validation-message');

    const numberPattern = /^[0-9]+$/;

    if (!numberPattern.test(phoneInput.value)) {
        validationMessage.textContent = 'Por favor, ingrese solo números.';
    } else if (phoneInput.value.length !== 10) {
        validationMessage.textContent = 'El número de teléfono debe tener 10 dígitos.';
    } else {
        validationMessage.textContent = 'Número de teléfono válido.';
    }
}

function validateLicensePlate() {
    const plateInput = document.getElementById('plate-input');
    const validationMessage = document.getElementById('validation-message');

    const platePattern = /^[A-Z]{3}-\d{3}$/;

    if (!platePattern.test(plateInput.value)) {
        validationMessage.textContent = 'Por favor, ingrese una placa válida en el formato XXX-000.';
    } else {
        validationMessage.textContent = 'Placa válida.';
    }
}

function login(event) {
    event.preventDefault();

    const phoneInput = document.getElementById('phone-input');
    const passwordInput = document.getElementById('password-input');
    const loginMessage = document.getElementById('login-message');

    if (phoneInput.value.length !== 10 || !/^[0-9]+$/.test(phoneInput.value)) {
        loginMessage.textContent = 'Por favor, ingrese un número de teléfono válido.';
    } else if (passwordInput.value.length < 6) {
        loginMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    } else {
        
        loginMessage.textContent = 'Inicio de sesión exitoso!';
    }
}