function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("themeBtn");
    const isDark = body.classList.toggle("dark-theme");

    if (button) {
        button.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
}

function togglePersonalInfo() {
    const infoOutput = document.getElementById("infoOutput");
    const logoToggle = document.getElementById("logoToggle");

    if (!infoOutput || !logoToggle) {
        return;
    }

    const shouldShow = !infoOutput.classList.contains("active");
    infoOutput.classList.toggle("active", shouldShow);
    logoToggle.setAttribute("aria-expanded", String(shouldShow));

    if (shouldShow) {
        infoOutput.innerHTML = "<strong>Name:</strong> Joemarie C. Yonzon<br><strong>Role:</strong> Aspiring Web Developer<br><strong>Location:</strong> Brgy. Lebertad Camai street Zone 2-A. Surralah, South Cotabato";
    }
}

window.addEventListener("load", function () {
    window.alert("Welcome to Joemarie's Portfolio!");

    const heading = document.querySelector("header h1");
    if (heading) {
        heading.innerText = "Hello, I'm";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeBtn");
    const logoToggle = document.getElementById("logoToggle");

    if (themeButton) {
        themeButton.addEventListener("click", toggleTheme);
    }

    if (logoToggle) {
        logoToggle.addEventListener("click", togglePersonalInfo);
    }
});
