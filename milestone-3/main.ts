// script.ts

interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Collect form data
        const formData: ResumeData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            education: (document.getElementById('education') as HTMLTextAreaElement).value,
            workExperience: (document.getElementById('workExperience') as HTMLTextAreaElement).value,
            skills: (document.getElementById('skills') as HTMLTextAreaElement).value
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
