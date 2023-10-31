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

function checkStudent() {
    var id = document.getElementById("studentId").value
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id

    fetch(functionURL, {method: "GET", mode: 'cors'})
                .then((response) => response.json())
                .then((data) => {
                    if (data.length == 0) {
                        alert("Student does not exist");
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