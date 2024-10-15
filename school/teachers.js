const teachersPage = [
  {
    tName: "Mehriddin",
    family: "Barnoyev",
    subject: "Jismoniy tarbiya",
    phone: "93 158 08 06",
  },
  {
    tName: "Toyirkhuja",
    family: "Tursunkhujaev",
    subject: "Informatika",
    phone: "93 158 08 06",
  },
  {
    tName: "Ramziddin",
    family: "Barnoyev",
    subject: "Matematika",
    phone: "93 158 08 06",
  },
];

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.querySelector("tbody");

// Function to render the table
function renderTable(data) {
  tbodyTeachersTable.innerHTML = ""; // Clear existing rows
  data.forEach((value, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${value.tName}</td>
        <td>${value.family}</td>
        <td>${value.subject}</td>
        <td>${value.phone}</td>
        <td><button class="btn" onclick="remove(${index})"><i class="fas fa-trash"></i></button></td>
      `;
    tbodyTeachersTable.appendChild(row);
  });
}

// Initial render
renderTable(teachersPage);

// Filter function
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

// Remove function
function remove(index) {
  // Remove the row from the data
  teachersPage.splice(index, 1);
  renderTable(teachersPage); // Re-render table after removing the teacher
}
