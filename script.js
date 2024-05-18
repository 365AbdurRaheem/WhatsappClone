const dot_3 = document.querySelector(".fa-ellipsis-vertical");
const ellipsis = document.querySelector(".ellipsis");
const page = document.querySelector(".page");
const pz = document.querySelectorAll(".p");
const main = document.querySelector(".main");
const blocks = document.querySelectorAll(".block");
const elp = document.querySelectorAll(".elp");
const WA = document.querySelector(".WA");
const search = document.querySelector(".Q");
const icons = document.querySelector(".icons");
const Q = document.querySelector(".fa-magnifying-glass");
const showViewed = document.querySelector(".toggleView");
const viewedBlock = document.querySelector(".viewedBlock");
const changeClass = document.getElementById("changeClass");
const arrows = document.querySelectorAll(".fa-arrow-left");

if (Q && WA && icons && search && page) {
    Q.addEventListener("click", () => {
        WA.style.display = "none";
        icons.style.display = "none";
        search.style.display = "block";
        pz.forEach(p => p.style.paddingTop = "25px");
        page.style.overflowX = "hidden";
        page.style.overflowY = "auto";
    });
}

function hide() {
    pz.forEach(p => p.style.paddingTop = "0px");
    WA.style.display = "block";
    icons.style.display = "flex";
    page.style.overflowY = "auto";
    search.style.display = "none";
}

arrows.forEach(arrow => arrow.addEventListener("click", hide));

if (dot_3 && ellipsis) {
    dot_3.addEventListener("mouseover", () => {
        ellipsis.style.display = "block";
    });
    ellipsis.addEventListener("mouseleave", () => {
        ellipsis.style.display = "none";
    });
}

const otherDot = document.querySelector(".otherdot");
const other = document.querySelector(".other");
if (otherDot && other) {
    otherDot.addEventListener("mouseover", () => {
        other.style.display = "block";
    });
    other.addEventListener("mouseleave", () => {
        other.style.display = "none";
    });
}

if (showViewed && changeClass && viewedBlock) {
    showViewed.addEventListener("click", () => {
        if (changeClass.classList.contains("fa-chevron-down")) {
            changeClass.classList.remove("fa-chevron-down");
            changeClass.classList.add("fa-chevron-up");
            viewedBlock.style.display = "block";
        } else {
            changeClass.classList.remove("fa-chevron-up");
            changeClass.classList.add("fa-chevron-down");
            viewedBlock.style.display = "none";
        }
    });
}
