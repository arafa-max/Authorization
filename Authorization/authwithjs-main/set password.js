const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('password2');
const setBtn = document.getElementById('button');

setBtn.addEventListener('click', () => {
    const pass1 = passwordInput.value.trim();
    const pass2 = passwordConfirm.value.trim();

    if (!pass1 || !pass2) return alert('Заполните оба поля');
    if (pass1 !== pass2) return alert('Пароли не совпадают');
    if (pass1.length < 6) return alert('Пароль должен быть минимум 6 символов');

    // Берём существующий userData
    const userDataJSON = localStorage.getItem('userData');
    if (!userDataJSON) return alert("Нет зарегистрированного пользователя");

    const userData = JSON.parse(userDataJSON);

    // Обновляем пароль
    userData.password = pass1;
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Пароль успешно изменён!');
    window.location.href = 'login.html';
});
function togglePassword() {
  const input = document.getElementById("password");
  const eye = document.getElementById("eye");


  if (input.type === "password") {
    input.type = "text";
    eye.src = "image/trailing-icon1.svg"; // 👈 открытый глаз
    eye.style.transform = "scale(1.2)";
    setTimeout(() => eye.style.transform = "scale(1)", 200);
  } else {
    input.type = "password";
    eye.src = "image/trailing-icon.svg"; // 👈 закрытый глаз
    eye.style.transform = "scale(1.2)";
    setTimeout(() => eye.style.transform = "scale(1)", 200);
  }
}
function togglePassword2() {
  const input = document.getElementById("password2");
  const eye = document.getElementById("eye2");


  if (input.type === "password") {
    input.type = "text";
    eye.src = "image/trailing-icon1.svg"; // 👈 открытый глаз
    eye.style.transform = "scale(1.2)";
    setTimeout(() => eye.style.transform = "scale(1)", 200);
  } else {
    input.type = "password";
    eye.src = "image/trailing-icon.svg"; // 👈 закрытый глаз
    eye.style.transform = "scale(1.2)";
    setTimeout(() => eye.style.transform = "scale(1)", 200);
  }
}
