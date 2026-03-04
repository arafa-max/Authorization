
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

   function login() {
  const login = document.getElementById('emai-input').value.trim(); // id из HTML
  const password = document.getElementById('password').value.trim(); // id из HTML

  const savedLogin = localStorage.getItem('userLogin');
  const savedPassword = localStorage.getItem('userPassword');

  if (login === savedLogin && password === savedPassword) {
    window.location.href = "welcome.html"; // переход на страницу приветствия
  } else {
    showMessage("Неверный логин или пароль!");
  }
}

function showMessage(text) {
  document.getElementById('message').innerText = text;
}
