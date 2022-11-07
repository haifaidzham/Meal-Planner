var selectedRow = null;

//show Alerts
function showAlert(message,className){
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);

}

//Clear All Fields
function clearFields(){
    document.querySelector("#Name").value = "";
    document.querySelector("#feedback").value ="";
}

//Add Data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get Form Values
    const Name = document.querySelector("#Name").value;
    const feedback = document.querySelector("#feedback").value;

    //validate
    if(Name == "" | feedback == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createComment("tr");

            row.innerHTML =`
                <td>${Name}</td>
                <td>${feedback}</td>
            `
        }
    }
});

//Delete Data

document.querySelector("student-list").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classlist.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});