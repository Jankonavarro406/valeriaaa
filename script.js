
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

const carta = document.getElementById("carta");
const sobre = document.querySelector(".sobre");

abrir.addEventListener("click", () => {

    carta.style.display = "block";
    sobre.style.display = "none";
    abrir.style.display = "none";

    carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

cerrar.addEventListener("click", () => {

    carta.style.display = "none";
    sobre.style.display = "flex";
    abrir.style.display = "inline-block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
