const htmlTag = document.getElementsByTagName("html")[0];


const moodBtn = document.getElementsByClassName("mood-btn")[0];
moodBtn.addEventListener("click", function () {
    const currentTheme = htmlTag.getAttribute("data-theme");
    
  if (currentTheme === "light") {
      htmlTag.setAttribute("data-theme", "dark");
  
  
  }
  if (currentTheme === "dark") {
    htmlTag.setAttribute("data-theme", "light");
   
  }
});
