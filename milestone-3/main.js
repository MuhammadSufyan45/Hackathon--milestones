// Importing form and resume output div in typescript ->
var form = document.getElementById("form-resume");
var resumeOutput = document.getElementById("resume-output");
// Handling Form Submission ->
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Accessing and storing imput values in variables ->
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generating resume structure ->
    var resumeHtml = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n<p><b>Address:</b>").concat(address, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    // Output of Generated Resume ->
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHtml;
    }
    else {
        console.error("Element is Missing");
    }
});
