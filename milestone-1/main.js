document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsContent = document.getElementById('skills-content');
    if (toggleButton && skillsContent) {
        toggleButton.addEventListener('click', function () {
            if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
                skillsContent.style.display = 'block';
                toggleButton.textContent = 'Hide Skills';
            }
            else {
                skillsContent.style.display = 'none';
                toggleButton.textContent = 'Show Skills';
            }
        });
    }
});
