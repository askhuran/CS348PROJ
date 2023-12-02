function mainSelect() {
    
    if (document.getElementById("Choices").value == "Edit") {
        window.location.href = 'edit.html';
        return;
    }
    if (document.getElementById("Choices").value == "Add") {
        window.location.href = 'add.html';
        return;
    }
    if (document.getElementById("Choices").value == "Delete") {
        window.location.href = 'delete.html';
        return;
    }
}

function checkStudentAdd() {
    var id = document.getElementById("studentId").value
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    if (data.length == 0) {
                        alert("Student does not exist!");
                        return;
                    }
                    else {
                        data = JSON.stringify(data)
                        var data = data.split(",");
                        localStorage.setItem("studentId", data[0]);
                        window.location.href = 'add2.html';
                        return;
                    }
                        
                });
}

function checkStudentDelete() {
    var id = document.getElementById("studentIdDel").value
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    if (data.length == 0) {
                        alert("Student does not exist!");
                        return;
                    }
                    else {
                        data = JSON.stringify(data)
                        var data = data.split(",");
                        data[3] = data[3].replace(']]', '');
                        data[4] = data[4].replace(']]', '');
                        if ((data[3] == 'null') && (data[4] == 'null')) {
                            alert("Entered student has no degree to delete!");
                            return;
                        }
                        localStorage.setItem("studentId", data[0]);
                        window.location.href = 'delete2.html';
                        return;
                    }
                        
                });
}


function addDegree() {
    if (document.getElementById("degChoice").value == "Data Science") {
        var dId = 0
    }
    if (document.getElementById("degChoice").value == "Computer Science") {
        var dId = 1
    }
    if (document.getElementById("degChoice").value == "Biochemistry") {
        var dId = 2
    }
    if (document.getElementById("degChoice").value == "Biology") {
        var dId = 3
    }
    if (document.getElementById("degChoice").value == "History") {
        var dId = 4
    }
    if (document.getElementById("degChoice").value == "Gender Studies") {
        var dId = 5
    }
    if (document.getElementById("degChoice").value == "English") {
        var dId = 6
    }
    if (document.getElementById("degChoice").value == "Turf Management") {
        var dId = 7
    }
    if (document.getElementById("degChoice").value == "Finance") {
        var dId = 8
    }
    if (document.getElementById("degChoice").value == "Economics") {
        var dId = 9
    }



    if (document.getElementById("conChoice").value == "AI") {
        var cId = 0
    }
    if (document.getElementById("conChoice").value == "Statistics") {
        var cId = 1
    }
    if (document.getElementById("conChoice").value == "Entrepreneurship") {
        var cId = 2
    }

    var sId = localStorage.getItem("studentId")
    sId = sId.replace(/\D+/g, '');


    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/addDegree?sId=" + sId + "&dId=" + dId + "&cId=" + cId

    fetch(functionURL, {method: "GET"})
                .then((response) => response.json())
                .then((data) => {
                        alert("Congrats! You have added a degree!");
                        window.location.href = 'index.html';
                        return;
                });

}





function deleteDegree() {
    var id = localStorage.getItem("studentId");
    id = id.replace(/\D+/g, '');
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-2?Id=" + id

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {  
                });
                alert("Degree successfully deleted!");
                window.location.href = 'index.html';
                return;
}


function storeDept() {
    
    if (document.getElementById("departments").value == "Science") {
        var dept = "Science"
    }
    if (document.getElementById("departments").value == "Liberal Arts") {
        var dept = "Liberal Arts"
    }
    if (document.getElementById("departments").value == "Agriculture") {
        var dept = "Agriculture"
    }
    if (document.getElementById("departments").value == "Business") {
        var dept = "Business"
    }
    
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/displayDegrees?dept=" + dept

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    data = JSON.stringify(data)
                    const tableHtml = createTable(data);
                    document.getElementById("tableDiv").innerHTML = tableHtml;
                    return;    
                });
}

function createTable(data) {
    // Parse the JSON string to an array
    const records = JSON.parse(data);

    let tableHtml = `<table class="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Program Name</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>`;

    // Check for data
    if (records.length) {
        // Loop through array
        records.forEach(record => {
            tableHtml += `<tr>`;
            // Loop through inner array
            record.forEach(value => {
                tableHtml += `<td>${value}</td>`;
            });
            tableHtml += `</tr>`;
        });
    } else {
        // Show no data message
        tableHtml += `<tr><td colspan="3">No data available</td></tr>`;
    }

    tableHtml += `</tbody></table>`;

    return tableHtml;
}


function checkStudentEdit() {
    var id = document.getElementById("studentIdEd").value
    localStorage.setItem("studentIdEd", id);
    console.log(localStorage.getItem("studentIdEd"));
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    if (data.length == 0) {
                        alert("Student does not exist!");
                        return;
                    }
                    else {
                        data = JSON.stringify(data)
                        var data = data.split(",");
                        data[3] = data[3].replace(']]', '');
                        data[4] = data[4].replace(']]', '');
                        if ((data[3] == 'null') && (data[4] == 'null')) {
                            alert("Entered student has no degree to edit!");
                            return;
                        }
                        localStorage.setItem("studentId", data[0]);
                        window.location.href = 'edit2.html';
                        return;
                    }
                        
                });
}



function editDegree() {
    var cid = document.getElementById("editChoices").value
    var sid = localStorage.getItem("studentIdEd")
   

    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/editDegree?conId=" + cid + "&sId=" + sid 

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    alert("Degree successfully edited!");
                    window.location.href = 'index.html';
                    return;
                });
}