const toggleButton = document.getElementsByClassName("hamburger")[0]
const asideBar = document.getElementsByClassName("aside")[0]

toggleButton.addEventListener("click", () => {
    asideBar.classList.toggle("active")
})