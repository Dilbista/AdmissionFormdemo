const image = document.getElementById('preview');
const input = document.getElementById('file');

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    image.src = URL.createObjectURL(file);
  }
});