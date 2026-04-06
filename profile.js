const profile = JSON.parse(localStorage.getItem('budgibook_profile') || '{}');

document.getElementById('farmName').value = profile.farmName || '';
document.getElementById('region').value = profile.region || '';
document.getElementById('contact').value = profile.contact || '';
document.getElementById('description').value = profile.description || '';

function saveProfile() {
  const newProfile = {
    farmName: document.getElementById('farmName').value,
    region: document.getElementById('region').value,
    contact: document.getElementById('contact').value,
    description: document.getElementById('description').value,
  };

  localStorage.setItem('budgibook_profile', JSON.stringify(newProfile));
  alert('Profil enregistré');
}
