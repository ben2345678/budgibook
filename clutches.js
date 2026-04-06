let clutches = JSON.parse(localStorage.getItem('budgibook_clutches') || '[]');

function saveClutches() {
  localStorage.setItem('budgibook_clutches', JSON.stringify(clutches));
}

function renderClutches() {
  const list = document.getElementById('clutchList');
  list.innerHTML = clutches.map((clutch, index) => `
    <li>
      <strong>${clutch.name}</strong> — ${clutch.date}
      <button onclick="deleteClutch(${index})">Supprimer</button>
    </li>
  `).join('');
}

function addClutch() {
  const name = prompt('Nom ou repère de la nichée ?');
  if (!name) return;

  const date = prompt('Date de début ?') || 'Non renseignée';
  clutches.push({ name, date });
  saveClutches();
  renderClutches();
}

function deleteClutch(index) {
  clutches.splice(index, 1);
  saveClutches();
  renderClutches();
}

renderClutches();
