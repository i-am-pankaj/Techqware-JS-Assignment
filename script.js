var studentData = [
  {
    name: "Aman",
    rollno: "11",
    cls: "12A",
    sub: "Hindi",
  },
  {
    name: "Shivam",
    rollno: "12",
    cls: "12A",
    sub: "Physics",
  },
  {
    name: "Raja",
    rollno: "19",
    cls: "12F",
    sub: "English",
  },
  {
    name: "Ankush",
    rollno: "8",
    cls: "12B",
    sub: "Maths",
  },
  {
    name: "Suraj",
    rollno: "10",
    cls: "12C",
    sub: "Chemistry",
  },
  {
    name: "Priyanshu",
    rollno: "13",
    cls: "12C",
    sub: "Economics",
  },
  {
    name: "Vijay",
    rollno: "15",
    cls: "12A",
    sub: "Accounts",
  },
  {
    name: "Gaurav",
    rollno: "21",
    cls: "12H",
    sub: "Sanskrit",
  },
  {
    name: "Vivek",
    rollno: "2",
    cls: "12E",
    sub: "Maths",
  },
  {
    name: "Surya",
    rollno: "5",
    cls: "12C",
    sub: "Biology",
  },
  {
    name: "Tapas",
    rollno: "25",
    cls: "12C",
    sub: "Drawing",
  },
  {
    name: "Aditya",
    rollno: "22",
    cls: "12A",
    sub: "Politics",
  },
  {
    name: "Omar",
    rollno: "6",
    cls: "12D",
    sub: "Econimics",
  },
  {
    name: "Abhinav",
    rollno: "9",
    cls: "12B",
    sub: "History",
  },
  {
    name: "Jay",
    rollno: "16",
    cls: "12F",
    sub: "Accounts",
  },
  {
    name: "Prateek",
    rollno: "29",
    cls: "12D",
    sub: "Computer Science",
  },
  {
    name: "Akif",
    rollno: "17",
    cls: "12B",
    sub: "Hindi",
  },
  {
    name: "Sumit",
    rollno: "34",
    cls: "12D",
    sub: "English",
  },
  {
    name: "Vaibhav",
    rollno: "20",
    cls: "12C",
    sub: "Sanskrit",
  },
  {
    name: "Prashant",
    rollno: "38",
    cls: "12B",
    sub: "Politics",
  },
];

function displayTableData() {
  var html = "<table broder='1|1 class='table'>";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "SNo." + "</td>";
    html += "<td>" + "Name" + "</td>";
    html += "<td>" + "Roll No." + "</td>";
    html += "<td>" + "Class" + "</td>";
    html += "<td>" + "Interesting Subject" + "</td>";
    html += "<td>" + "Action" + "</td>";
    html += "</tr>";
    html += "</thead>";

    for (var i = 0; i < studentData.length; i++) {
      var sno = i + 1;
      html += "<tr>";
      html += "<td>" + sno + "</td>";
      html += "<td>" + studentData[i].name + "</td>";
      html += "<td>" + studentData[i].rollno + "</td>";
      html += "<td>" + studentData[i].cls + "</td>";
      html += "<td>" + studentData[i].sub + "</td>";
      html +=
        "<td>" +
        `<a onClick="onDelete(${studentData[i].rollno})">Delete</a>` +
        "</td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 200);
}

displayTableData();

function onAdd() {
  document.getElementById("forms").style.display = "block";
  document.getElementById("table").style.display = "none";
  document.getElementById("add").style.display = "none";
}

function onFormSubmit() {
  if (validate()) {
    insertNewRecord();
    resetForm();
    document.getElementById("forms").style.display = "none";
    document.getElementById("table").style.display = "grid";
    document.getElementById("add").style.display = "block";
  }
}

function insertNewRecord() {
  var name = document.getElementById("studentName").value;
  var rollno = document.getElementById("rollno").value;
  var cls = document.getElementById("class").value;
  var sub = document.getElementById("subject").value;

  if (name && rollno && cls && sub) {
    studentData.push({
      name: name,
      rollno: rollno,
      cls: cls,
      sub: sub,
    });
    displayTableData();
    resetForm();
  }
}

function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("rollno").value = "";
  document.getElementById("class").value = "";
  document.getElementById("subject").value = "";
}

function onDelete(rn) {
  var fil = studentData.filter((a, i) => {
    if (rn == a.rollno) {
      studentData.splice(i, 1);
      displayTableData();
    }
  });
  resetForm();
}

function validate() {
  isValid = true;
  if (document.getElementById("studentName").value == "") {
    isValid = false;
  } else if (document.getElementById("rollno").value == "") {
    isValid = false;
  } else if (document.getElementById("class").value == "") {
    isValid = false;
  } else if (document.getElementById("subject").value == "") {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}
