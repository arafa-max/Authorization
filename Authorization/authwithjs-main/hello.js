document.addEventListener("DOMContentLoaded", () => {
    // Получаем данные пользователя
    const loggedIn = localStorage.getItem("loggedIn");
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Если пользователь не вошёл, перенаправляем на login.html

    // Отображаем имя пользователя
    const usernameElem = document.querySelector(".log");
    usernameElem.textContent = `Hello ${userData.name}`;

    // Обработка кнопки Logout
    const logoutBtn = document.getElementById("butlog");
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn"); // удаляем статус входа
        window.location.href = "login.html"; // перенаправляем на страницу входа
    });
});
