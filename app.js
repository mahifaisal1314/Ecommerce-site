// ========== LIVE DATE & TIME IN FOOTER ==========
function updateDateTime() {
    const now = new Date();
    // Format: YYYY-MM-DD HH:MM:SS
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mi = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    const formatted = `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
    const el = document.getElementById("dateTime");
    if (el) {
        el.textContent = formatted;
    }
}

// call once + every 1s
updateDateTime();
setInterval(updateDateTime, 1000);

// ========== LOGIN FORM CONFIRM POPUP ==========
$(document).ready(function () {
    $("#loginForm").on("submit", function (e) {
        e.preventDefault();
        alert("Login form submitted");
    });

    // (optional) Signup confirm
    $("#signupForm").on("submit", function (e) {
        e.preventDefault();
        alert("Account created successfully");
    });

    // ========== SIMPLE IMAGE ZOOM FEATURE ==========
    // click to toggle zoom on product-detail page
    $(".zoom-wrapper .zoom-img").on("click", function () {
        $(this).toggleClass("zoomed");
    });

    // also zoom on hover for desktop
    $(".zoom-wrapper .zoom-img").hover(
        function () {
            $(this).addClass("zoomed");
        },
        function () {
            $(this).removeClass("zoomed");
        }
    );
});
