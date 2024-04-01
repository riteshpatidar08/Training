document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('addBtn');
  const removeBtn = document.getElementById('removeBtn');
  const content = document.getElementById('content');

  addBtn.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added dynamically.';
    content.appendChild(newParagraph);
  });

  removeBtn.addEventListener('click', function () {
    const paragraphs = content.getElementsByTagName('p');
    console.log(paragraphs)
    if (paragraphs.length > 0) {
      content.removeChild(paragraphs[paragraphs.length - 1]);
    }
  });
});
