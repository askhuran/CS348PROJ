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
    console.log("here")
    var id = document.getElementById("studentId").value
    var functionURL = "https://us-central1-cs348proj-403523.cloudfunctions.net/function-1?studentId=" + id
    
    fetch(functionURL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    console.log(response.text());
                })
                .then((data) => {
                    responseContainer.innerHTML = `Response from Cloud Function: ${data}`;
                })
                .catch((error) => {
                    responseContainer.innerHTML = `Fetch error: ${error}`;
                });


}