const btnSide2 = document.getElementById("btnSide");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const modeBtn = document.getElementById("modeBtn");
const teachers = document.getElementById("teachers");
const students = document.getElementById("students");


btnSide2.onclick = function () {
  if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
  else sidebar.classList.add("hide");
};

const keyUp = (e) => {
  if (e.key === "Escape") sidebar.classList.add("hide");
  if (e.key === "Enter") sidebar.classList.remove("hide");
};

for (const card of cards.children) {
  console.log(card.children);
  card.children[0].ondblclick = () => {
    console.log(card.children[0].innerHTML);
  };
}

modeBtn.onclick = function () {
  const body = document.body;

  // Toggle the dark mode class on the body
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    modeBtn.classList.remove("fa-moon");
    modeBtn.classList.add("fa-sun");
  } else {
    body.classList.add("dark-mode");
    modeBtn.classList.remove("fa-sun");
    modeBtn.classList.add("fa-moon");
  }
  console.log("mode btn");
  
};

teachers.onclick = function () {
  window.location.href = "./teacher.html";
  console.log('ishlayapti');
};

students.onclick = function () {   
    window.location.href = "./student.html";
    console.log('ishlayapti');
  };
  