function mainSelect() {
    console.log(document.getElementById("Choices").value)
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
    var url = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id
    
}