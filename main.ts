document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsContent = document.getElementById('skills-content') as HTMLDivElement;

    if (toggleButton && skillsContent) {
        toggleButton.addEventListener('click', () => {
            if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
                skillsContent.style.display = 'block';
                toggleButton.textContent = 'Hide Skills';
            } else {
                skillsContent.style.display = 'none';
                toggleButton.textContent = 'Show Skills';
            }
        });
    }
});