const birds = JSON.parse(localStorage.getItem('budgibook_birds') || '[]');
document.getElementById('countBirds').textContent = birds.length;
