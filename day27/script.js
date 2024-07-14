document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const strengthMeter = document.getElementById('strength-meter');
    const strengthBar = document.getElementById('strength-bar');
    const suggestions = document.getElementById('suggestions');
    const togglePasswordButton = document.getElementById('toggle-password');
    const togglePasswordIcon = togglePasswordButton.querySelector('i');

    const strength = {
        0: "Worst",
        1: "Bad",
        2: "Weak",
        3: "Good",
        4: "Strong"
    };

    const passwordStrength = (password) => {
        let score = 0;
        if (password.length > 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score;
    };

    const getSuggestions = (password) => {
        const suggestions = [];
        if (password.length <= 8) suggestions.push("Use at least 8 characters.");
        if (!/[A-Z]/.test(password)) suggestions.push("Include at least one uppercase letter.");
        if (!/[0-9]/.test(password)) suggestions.push("Include at least one number.");
        if (!/[^A-Za-z0-9]/.test(password)) suggestions.push("Include at least one special character.");
        return suggestions;
    };

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const score = passwordStrength(password);

        strengthBar.style.width = `${(score + 1) * 25}%`;
        strengthBar.style.backgroundColor = score < 2 ? 'red' : score < 3 ? 'orange' : score < 4 ? 'yellow' : 'green';

        const suggestionList = getSuggestions(password);
        suggestions.innerHTML = suggestionList.length > 0 ? `<ul>${suggestionList.map(item => `<li>${item}</li>`).join('')}</ul>` : 'Great password!';
    });

    togglePasswordButton.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        togglePasswordIcon.classList.toggle('fa-eye', isPasswordVisible);
        togglePasswordIcon.classList.toggle('fa-eye-slash', !isPasswordVisible);
    });
});
