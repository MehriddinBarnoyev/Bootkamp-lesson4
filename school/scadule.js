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
    subject: "Matemetika",
    phone: "93 158 08 06",
  },
  {
    tName: "Mehriddin",
    family: "Barnoyev",
    subject: "Jismoniy tarbiya",
    phone: "93 158 08 06",
  },
];
console.log(teachersPage);

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.querySelector("tbody");

// tbodyTeachersTable.innerHTML = "";

teachersPage.forEach((value, index) => {
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
function remove(index) {
  tbodyTeachersTable.deleteRow(index -1);
  console.log("Removed");
}

function removeAll() {
  tbodyTeachersTable.innerHTML = "";
  console.log("All removed");
  
}
