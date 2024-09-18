// theme toogle
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

// todo -list
let count = 1;
document.getElementById("add-button").addEventListener("click", function () {
  const listItem = document.getElementById("text-area").value;
  document.getElementById("text-area").value = "";

  const listContainer = document.getElementById("list-container");
 
  const row = document.createElement("tr");
  row.innerHTML = `
              <th>${count++}</th>
              <td>${listItem}</td>
              <td><button class="btn cross-btn">X</button></td>
            `;

  listContainer.append(row);
});

