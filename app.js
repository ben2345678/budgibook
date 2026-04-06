const birds = [];

function renderBirds() {
  const list = document.getElementById('birdList');
  list.innerHTML = birds.map(bird => `<li><strong>${bird.name}</strong> — ${bird.ring}</li>`).join('');
}

function addBird() {
  const name = prompt('Nom de l\'oiseau ?');
  if (!name) return;

  const ring = prompt('Numéro de bague ?') || 'Non renseigné';
  birds.push({ name, ring });
  renderBirds();
}
