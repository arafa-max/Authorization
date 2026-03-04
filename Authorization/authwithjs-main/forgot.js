
document.addEventListener('DOMContentLoaded', () => {
    const buter = document.getElementById('buter');
    const noticeBox = document.getElementById('noticeBox');
    const openBtn = document.getElementById('openBtn');

    function genCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    buter.addEventListener('click', () => {
        const email = document.getElementById('emai-input').value.trim();
        if (!email) return alert('Введите email');

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) return alert('Введите корректный email');

        const code = genCode();

        // Сохраняем email и код в sessionStorage
        sessionStorage.setItem('passwordResetEmail', email);
        sessionStorage.setItem('passwordResetCode', code);

        noticeBox.style.display = 'block';
    });

    openBtn.addEventListener('click', () => {
        window.location.href = 'email.html';
    });
});
