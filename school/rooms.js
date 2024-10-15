const teachersPage = [
  {
    tName: "1",
    family: "2",
    subject: "125",
    phone: "93 158 08 06",
  },
  {
    tName: "3",
    family: "4",
    subject: "415",
    phone: "93 456 14 78",
  },
  {
    tName: "2",
    family: "2",
    subject: "202",
    phone: "93 785 64 72",
  },
  {
    tName: "4",
    family: "6",
    subject: "465",
    phone: "93 874 34 51",
  },
];
console.log(teachersPage);

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.querySelector("tbody");

// tbodyTeachersTable.innerHTML = "";

function renderTable(data) {
  tbodyTeachersTable.innerHTML = ""; // Clear existing rows

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
      teacher.subject.toLowerCase().includes(filterInput) ||
      teacher.phone.toLowerCase().includes(filterInput)
    );
  });
  renderTable(filteredTeachers); // Re-render table with filtered data
}
