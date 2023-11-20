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
        localStorage.setItem("department", "Science");
        return;
    }
    if (document.getElementById("departments").value == "Liberal Arts") {
        localStorage.setItem("department", "Liberal Arts");
        return;
    }
    if (document.getElementById("departments").value == "Agriculture") {
        localStorage.setItem("department", "Agriculture");
        return;
    }
    if (document.getElementById("departments").value == "Business") {
        localStorage.setItem("department", "Business");
        return;
    }
}


function displayDegrees() {
    var dept = localStorage.getItem("department");
}