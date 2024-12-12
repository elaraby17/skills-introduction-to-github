// تحديد زر التبديل
const toggleButton = document.getElementById("toggle-dark-mode");

// التبديل بين الوضعين
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // تغيير الأيقونة في الزر
    const icon = toggleButton.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // حفظ الحالة في localStorage
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

// تفعيل الوضع المحفوظ عند التحميل
window.addEventListener("load", () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        toggleButton.querySelector("i").classList.remove("fa-moon");
        toggleButton.querySelector("i").classList.add("fa-sun");
    }
});

