function saveBird() {
  const birds = JSON.parse(localStorage.getItem('budgibook_birds') || '[]');

  const bird = {
    name: document.getElementById('name').value,
    ring: document.getElementById('ring').value,
    sex: document.getElementById('sex').value,
    mutation: document.getElementById('mutation').value,
    birth: document.getElementById('birth').value,
    status: document.getElementById('status').value,
    notes: document.getElementById('notes').value,
  };

  birds.push(bird);
  localStorage.setItem('budgibook_birds', JSON.stringify(birds));
  location.href = 'birds.html';
}
