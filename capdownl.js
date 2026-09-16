const form = document.getElementById('regForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPass = document.getElementById('errorPass');

function validateName(name) {
    if (!name.trim()) {
        return "Это поле обязательно!";
    }

    if (name.trim().length < 3) {
        return "Более 3х символов";
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name)) {
        return 'Имя может содержать только буквы';
    }

    return '';
}

function validateEmail(email) {
    if (!email.trim()) {
        return "Это поле обязательно!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return 'Введите корректный email';
    }

    return '';
}

function validatePassw(password) {
    if (!password.trim()) {
        return "Это поле обязательно!";
    }

    if (password.trim().length < 6) {
        return 'Пароль менее 6 символов!';
    }

    if (!/[A-Z]/.test(password)) {
        return 'Пароль должен содержать хотя бы одну заглавную букву';
    }

    if (!/[0-9]/.test(password)) {
        return 'Пароль должен содержать хотя бы одну цифру';
    }

    return '';
}

// Функция для показа ошибки
function showError(inputEle, errorEle, message) {
    errorEle.textContent = message;
    errorEle.style.color = 'red';
    inputEle.classList.add('error-border');
    inputEle.classList.remove('success-border');
}

// Функция для показа успеха
function showSuccess(inputEle, errorEle) {
    errorEle.textContent = '✓ Успешно';
    errorEle.style.color = 'green';
    inputEle.classList.remove('error-border');
    inputEle.classList.add('success-border');
}

// Функция для очистки сообщений
function clearMessage(inputEle, errorEle) {
    errorEle.textContent = '';
    inputEle.classList.remove('error-border');
    inputEle.classList.remove('success-border');
}

// При вводе - только показываем ошибки, но не успех
nameInput.addEventListener('input', function() {
    const error = validateName(this.value);
    if (error) {
        showError(nameInput, errorName, error);
    } else {
        clearMessage(nameInput, errorName);
    }
});

emailInput.addEventListener('input', function() {
    const error = validateEmail(this.value);
    if (error) {
        showError(emailInput, errorEmail, error);
    } else {
        clearMessage(emailInput, errorEmail);
    }
});

passInput.addEventListener('input', function() {
    const error = validatePassw(this.value);
    if (error) {
        showError(passInput, errorPass, error);
    } else {
        clearMessage(passInput, errorPass);
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameError = validateName(nameInput.value);
    const emailError = validateEmail(emailInput.value);
    const passError = validatePassw(passInput.value);

    // Показываем ошибки или успех только при отправке
    if (nameError) {
        showError(nameInput, errorName, nameError);
    } else {
        showSuccess(nameInput, errorName);
    }

    if (emailError) {
        showError(emailInput, errorEmail, emailError);
    } else {
        showSuccess(emailInput, errorEmail);
    }

    if (passError) {
        showError(passInput, errorPass, passError);
    } else {
        showSuccess(passInput, errorPass);
    }

    // Если все поля валидны - отправляем форму
    if (!nameError && !emailError && !passError) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passInput.value
        };

        console.log('Форма отправлена:', formData);
        alert('Форма успешно отправлена!');
        form.reset();

        // Очищаем все стили и сообщения
        clearMessage(nameInput, errorName);
        clearMessage(emailInput, errorEmail);
        clearMessage(passInput, errorPass);
    }
});