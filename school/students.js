const teachersPage = [
  {
    tName: "Mehriddin",
    family: "Barnoyev",
    subject: "7-B",
    phone: "93 158 08 06",
  },
  {
    tName: "Toyirkhuja",
    family: "Tursunkhujaev",
    subject: "8-A",
    phone: "93 158 08 06",
  },
  {
    tName: "Ramziddin",
    family: "Barnoyev",
    subject: "9-D",
    phone: "93 158 08 06",
  },
  {
    tName: "Mehriddin",
    family: "Barnoyev",
    subject: "11-V",
    phone: "93 158 08 06",
  },
  {
    tName: "Ali",
    family: "G'ani",
    subject: "5-B",
    phone: "93 158 08 06",
  },
];
console.log(teachersPage);

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.querySelector("tbody");

// tbodyTeachersTable.innerHTML = "";
function renderTable(data) {
  tbodyTeachersTable.innerHTML = "";
  data.forEach((value, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <th>${index + 1}</th>
              <td>${value.tName}</td>
              <td>${value.family}</td>
              <td>${value.subject}</td>
              <td>${value.phone}</td>
              <td><button class="btn" onclick = "remove(${index})"><i class="fas fa-trash"></i></button></td>
            `;
    // Append the row to tbody
    tbodyTeachersTable.appendChild(row);
  });
}
renderTable(teachersPage);

function remove(index) {
  tbodyTeachersTable.deleteRow(index - 1);
  console.log("Removed");
}

function removeAll() {
  tbodyTeachersTable.innerHTML = "";
  console.log("All removed");
}
function filterTable() {
  const filterInput = document
    .getElementById("filterInput")
    .value.toLowerCase();
  const filteredTeachers = teachersPage.filter((teacher) => {
    return (
      teacher.tName.toLowerCase().includes(filterInput) ||
      teacher.family.toLowerCase().includes(filterInput) ||
      teacher.subject.toLowerCase().includes(filterInput)
    );
  });
  renderTable(filteredTeachers); // Re-render table with filtered data
}
