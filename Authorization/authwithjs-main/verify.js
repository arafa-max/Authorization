const verifyBtn = document.getElementById('buter');
  const passwordInput = document.getElementById('password');

  verifyBtn.addEventListener('click', (e) => {
    e.preventDefault(); // чтобы форма не перезагружала страницу
    const enteredCode = passwordInput.value.trim();
    const savedCode = sessionStorage.getItem('passwordResetCode');

    if (!enteredCode) {
      alert('Введите код');
      return;
    }

    if (enteredCode === savedCode) {
      // Если код верный — переходим на страницу установки пароля
      window.location.href = 'Set a Password.html';
    } else {
      alert('Неверный код. Попробуйте ещё раз.');
    }
  });

  // Функция показа/скрытия кода
  function togglePassword() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
  }
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