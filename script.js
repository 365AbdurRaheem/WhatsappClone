const dot_3 =document.querySelector(".fa-ellipsis-vertical");
const ellipsis=document.querySelector(".ellipsis");
const page=document.querySelector(".page");
const p=document.querySelector(".p");
const main=document.querySelector(".main");
const blocks=document.querySelectorAll(".block")
const elp=document.querySelectorAll(".elp")
const WA=document.querySelector(".WA");
const search=document.querySelector(".Q");
const icons=document.querySelector(".icons");
const Q=document.querySelector(".fa-magnifying-glass");
const showViewed=document.querySelector(".toggleView");
const viewedBlock=document.querySelector(".viewedBlock");
const changeClass=document.getElementById("changeClass");
const arrow=document.querySelector(".fa-arrow-left")
Q.addEventListener("click", () => {
WA.style.display="none";
icons.style.display="none";
search.style.display="block";
p.style.paddingTop="25px";
page.style.overflowX ="hidden";
page.style.overflowY ="auto";
});
function hide(){
    p.style.paddingTop="0px";
    WA.style.display="block";
    icons.style.display="flex";
    page.style.overflowY ="auto";
    search.style.display="none";
}
arrow.addEventListener("click", hide)


dot_3.addEventListener("mouseover", () => {
    ellipsis.style.display="block";
});
ellipsis.addEventListener("mouseleave", () => {
    ellipsis.style.display="none";
});


document.querySelector(".otherdot").addEventListener("mouseover", ()=>{
    document.querySelector(".other").style.display="block";
})

 document.querySelector(".other").addEventListener("mouseleave", () => {
     document.querySelector(".other").style.display="none";
});

showViewed.addEventListener("click", () => {
    if(changeClass.classList.contains("fa-chevron-down"))
    {
        changeClass.classList.remove("fa-chevron-down");
        changeClass.classList.add("fa-chevron-up");
        viewedBlock.style.display="block";
    }
    else{
        changeClass.classList.remove("fa-chevron-up");
        changeClass.classList.add("fa-chevron-down");
        viewedBlock.style.display="none";
    }
})

