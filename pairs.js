let pairs = JSON.parse(localStorage.getItem('budgibook_pairs') || '[]');

function savePairs() {
  localStorage.setItem('budgibook_pairs', JSON.stringify(pairs));
}

function renderPairs() {
  const list = document.getElementById('pairList');
  list.innerHTML = pairs.map((pair, index) => `
    <li>
      <strong>${pair.male}</strong> + <strong>${pair.female}</strong>
      <button onclick="deletePair(${index})">Supprimer</button>
    </li>
  `).join('');
}

function addPair() {
  const male = prompt('Nom du mâle ?');
  if (!male) return;

  const female = prompt('Nom de la femelle ?');
  if (!female) return;

  pairs.push({ male, female });
  savePairs();
  renderPairs();
}

function deletePair(index) {
  pairs.splice(index, 1);
  savePairs();
  renderPairs();
}

renderPairs();
