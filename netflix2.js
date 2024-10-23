// script.js
function filterJobs() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const locationQuery = document.getElementById('location').value.toLowerCase();
    const experienceQuery = document.getElementById('experience').value;

    const jobListings = document.querySelectorAll('.job');

    jobListings.forEach(job => {
        const title = job.querySelector('h3').textContent.toLowerCase();
        const location = job.getAttribute('data-location').toLowerCase();
        const experience = job.getAttribute('data-experience');

        let isVisible = true;

        if (searchQuery && !title.includes(searchQuery)) {
            isVisible = false;
        }

        if (locationQuery && !location.includes(locationQuery)) {
            isVisible = false;
        }

        if (experienceQuery && experienceQuery !== experience) {
            isVisible = false;
        }

        if (isVisible) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}
function filterJobs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const locationInput = document.getElementById('location').value.toLowerCase();
    const experienceInput = document.getElementById('experience').value;

    const jobs = document.querySelectorAll('.job');

    jobs.forEach(job => {
        const title = job.querySelector('h3').textContent.toLowerCase();
        const location = job.getAttribute('data-location').toLowerCase();
        const experience = job.getAttribute('data-experience');

        if (
            (title.includes(searchInput) || searchInput === "") &&
            (location.includes(locationInput) || locationInput === "") &&
            (experience.includes(experienceInput) || experienceInput === "")
        ) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}

function applyNow(button) {
    const jobTitle = button.parentElement.querySelector('h3').textContent;
    alert(`You have applied for the ${jobTitle} position.`);
}