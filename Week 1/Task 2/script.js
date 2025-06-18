function addNewNote() {
  const container = document.getElementById('container');
  
  const newNote = document.createElement('div');
  newNote.className = 'note';
  newNote.contentEditable = 'true';
  
  newNote.addEventListener('input', () => {
    if (newNote.textContent.trim() === '') {
      newNote.classList.remove('not-empty');
    } else {
      newNote.classList.add('not-empty');
    }
  });

  newNote.classList.remove('not-empty');

  newNote.ondblclick = function () {
    deleteNote(newNote);
  };

  container.insertBefore(newNote, container.lastElementChild);
}

function deleteNote(noteElement) {
  noteElement.remove();
}
