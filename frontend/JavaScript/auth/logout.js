document.addEventListener('DOMContentLoaded', () =>{
    const btnlogout = document.getElementById("btn-logout")

    btnlogout.addEventListener("click", () => {
        localStorage.removeItem("user_id");
        window.location.href = 'login.html';
    });
});
