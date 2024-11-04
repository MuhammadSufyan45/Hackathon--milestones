// Importing form and resume output div in typescript ->

const form = document.getElementById("form-resume") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;

// Handling Form Submission ->

form.addEventListener("submit",(event:Event) => {
    event.preventDefault() 

// Accessing and storing imput values in variables ->

  const name = (document.getElementById("name") as HTMLInputElement).value
  const email = (document.getElementById("email") as HTMLInputElement).value
  const phone = (document.getElementById("phone") as HTMLInputElement).value
  const address = (document.getElementById("address") as HTMLInputElement).value
  const education = (document.getElementById("education") as HTMLInputElement).value
  const experience = (document.getElementById("experience") as HTMLInputElement).value
  const skills = (document.getElementById("skills") as HTMLInputElement).value

// Generating resume structure ->


const resumeHtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>
<p><b>Address:</b>${address}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`

// Output of Generated Resume ->

if(resumeOutput){
    resumeOutput.innerHTML = resumeHtml
}else {
    console.error("Element is Missing")
}
})

