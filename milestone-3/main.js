"use strict";
// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            education: document.getElementById('education').value,
            workExperience: document.getElementById('workExperience').value,
            skills: document.getElementById('skills').value
        };
        // Generate resume content
        const resumeHtml = `
            <h2>${formData.name}</h2>
            <p>Email: ${formData.email}</p>
            <h3>Education</h3>
            <p>${formData.education}</p>
            <h3>Work Experience</h3>
            <p>${formData.workExperience}</p>
            <h3>Skills</h3>
            <p>${formData.skills}</p>
        `;
        // Display resume
        resumeOutput.innerHTML = resumeHtml;
    });
});
