console.clear();

const darkModeButton = document.querySelector('[data-js="button-unactive"]')
darkModeButton.addEventListener("click", () =>{
    document.body.classList.toggle("darkmode");
});

// let darkMode = localStorage.getItem("darkmode");
// const darkModeToggle = document.querySelector('[data-js="button-unactive"]')

// const enableDarkMode = () => {
//     document.body.classList.add("darkmode")
//     localStorage.setItem("darkMode", "enabled" );
// };

// const disableDarkMode = () => {
//     document.body.classList.remove("darkmode")
//     localStorage.setItem("darkMode", "disabled" );
// };
// if (darkMode ==="enabled"){
//     enableDarkMode();
// }
// darkModeToggle.addEventListener("click", () => {
//     darkMode = localStorage.getItem("darkmode");
//     if(darkMode !== "enabled") {
//     enableDarkMode();
//     console.log(darkMode)
//     } else {
//         disableDarkMode();
//         console.log(darkMode);
//     }
    
// })