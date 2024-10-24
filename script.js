const abrir = document.querySelector(".open")

abrir.addEventListener("click", abra)
function abra() {
    const menu = document.querySelector(".box-open");
    menu.classList.add("open")
}