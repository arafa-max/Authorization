        const notification = document.getElementById('notification');
        const openEmail = document.getElementById('openEmail');
        const emailCard = document.getElementById('emailCard');
        const emailDisplay = document.getElementById('emailDisplay');
        const codeDisplay = document.getElementById('codeDisplay');
        const verifyBtn = document.getElementById('verifyBtn');
        const copyBtn = document.getElementById('copyBtn');

        // Получаем email и код из sessionStorage
        const email = sessionStorage.getItem('passwordResetEmail');
        const code = sessionStorage.getItem('passwordResetCode');

        if (email && code) {
            emailDisplay.textContent = email;
            codeDisplay.textContent = code;
        } else {
            emailDisplay.textContent = 'неизвестный email';
            codeDisplay.textContent = '000000';
        }

        // Открываем письмо с анимацией
        openEmail.addEventListener('click', () => {
            notification.classList.add('hidden');
            emailCard.classList.add('show');
        });

        // Кнопка Verify ведет на страницу смены пароля
        verifyBtn.addEventListener('click', () => {
            window.location.href = 'Verify code.html';
        });

        // Копировать код
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeDisplay.textContent);
                copyBtn.textContent = 'Скопировано';
                setTimeout(() => copyBtn.textContent = 'Скопировать код', 1400);
            } catch {
                alert('Не удалось скопировать');
            }
        });
