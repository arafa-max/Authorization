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
  const input = document.getElementById("confirm");
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
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

const rules = [
  document.getElementById("lengthRule"),
  document.getElementById("letterRule"),
  document.getElementById("numberRule"),
  document.getElementById("specialRule"),
  document.getElementById("matchRule")
];

let hideTimeout;

function showRule(rule, valid = false, text = null) {
  rule.classList.remove("hide");
  rule.classList.add("show");
  rule.classList.remove("valid", "invalid");
  rule.classList.add(valid ? "valid" : "invalid");
  if (text) rule.textContent = text;
}

function hideRule(rule) {
  rule.classList.add("hide");
  setTimeout(() => {
    rule.classList.remove("show", "hide");
  }, 400); // совпадает с transition
}

function checkRules() {
  const pass = password.value;
  const confirmPass = confirm.value;

  if (hideTimeout) clearTimeout(hideTimeout);

  // Скрываем все правила кроме последнего
  for (let i = 0; i < rules.length - 1; i++) {
    rules[i].classList.remove("show", "valid", "invalid");
  }

  // Проверка первых 4 правил
  if (pass.length < 8) {
    showRule(rules[0]);
    return;
  }

  if (!/[a-zA-Z]/.test(pass)) {
    showRule(rules[1]);
    return;
  }

  if (!/\d/.test(pass)) {
    showRule(rules[2]);
    return;
  }

  if (!/[!@#$%^&*]/.test(pass)) {
    showRule(rules[3]);
    return;
  }

  // Последнее правило — совпадение паролей
  if (pass && pass !== confirmPass) {
    showRule(rules[4], false, "Пароли не совпадают ❌");
    return;
  }

  if (pass && pass === confirmPass) {
    showRule(rules[4], true, "Пароли совпадают ✅");

    // Скрываем через 3 секунды
    hideTimeout = setTimeout(() => hideRule(rules[4]), 3000);
  }
}

password.addEventListener("input", checkRules);
confirm.addEventListener("input", checkRules);

// === Проверка чекбокса "I agree" ===
const agreeCheckbox = document.getElementById("i");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");

// изначально кнопка неактивна
registerBtn.disabled = true;
registerBtn.style.opacity = "0.5";

// если чекбокс нажат — активируем кнопку
agreeCheckbox.addEventListener("change", () => {
  if (agreeCheckbox.checked) {
    registerBtn.disabled = false;
    registerBtn.style.opacity = "1";
  } else {
    registerBtn.disabled = true;
    registerBtn.style.opacity = "0.5";
  }
});

// === Регистрация ===
registerBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pass = password.value.trim();
  const confirmPass = confirm.value.trim();

  // Проверка полей
  if (!name || !lastname || !email || !phone || !pass || !confirmPass) {
    message.textContent = "Пожалуйста, заполните все поля!";
    message.style.color = "red";
    return;
  }

  if (pass !== confirmPass) {
    message.textContent = "Пароли не совпадают!";
    message.style.color = "red";
    return;
  }

  if (!agreeCheckbox.checked) {
    message.textContent = "Вы должны согласиться с условиями!";
    message.style.color = "red";
    return;
  }

  // Сохраняем данные (временно — localStorage)
  const userData = {
    name,
    lastname,
    email,
    phone,
    password: pass
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  message.textContent = "Регистрация успешна ✅";
  message.style.color = "green";

  // Переход на страницу входа через 1 сек
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});
