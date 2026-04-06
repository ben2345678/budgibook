let birds = JSON.parse(localStorage.getItem('budgibook_birds') || '[]');

function saveBirds() {
  localStorage.setItem('budgibook_birds', JSON.stringify(birds));
}

function renderBirds() {
  const list = document.getElementById('birdList');
  list.innerHTML = birds.map((bird, index) => `
    <li>
      <strong>${bird.name}</strong> — ${bird.ring}
      <button onclick="deleteBird(${index})">Supprimer</button>
    </li>
  `).join('');
}

function addBird() {
  const name = prompt('Nom de l\'oiseau ?');
  if (!name) return;

  const ring = prompt('Numéro de bague ?') || 'Non renseigné';
  birds.push({ name, ring });
  saveBirds();
  renderBirds();
}

function deleteBird(index) {
  birds.splice(index, 1);
  saveBirds();
  renderBirds();
}

renderBirds();
