console.log("Hello, World!");

 greet();
/// greet the user
function greet() {
    let username = prompt("Please Enter Your Name:");
    alert("Hello,"+username+"!");
    document.getElementById('username').innerText = username;
}

/// Validate form 
function validateForm() {
    let name = document.getElementById('name-input').value;
    if (name === "") {
        alert("name must be filled out");
    }
}