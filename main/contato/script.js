document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = "./login/index.html";
    }
});