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

  if (listItem == "") {
    alert("Write Something");
  } else {
    row.innerHTML = `
    <th class="variable">${count++}</th>
    <td>${listItem}</td>
    <td><button onclick="remove(event)"  class="btn cross-btn">X</button></td>
  `;
    listContainer.append(row);
  }
});
function remove(event) {


  const child = event.target.parentNode.parentNode;
  const arr = Array.from(child.parentNode.children);
  for (let i = arr.indexOf(child) + 1; i < arr.length; i++) {
    const childUpdate = child.parentNode.children[i];
    childUpdate.getElementsByTagName("th")[0].innerText -= 1;
    
  }
  event.target.parentNode.parentNode.remove();
  count--;
}

document.getElementById("clear-btn").addEventListener("click",function () {
  count = 1;
  document.getElementById("list-container").innerHTML = "";
  console.log("ok");
})
