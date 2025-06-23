window.addEventListener('load', () => {
  const rocket = document.getElementById('rocket-container');
  setTimeout(() => {
    rocket.classList.add('fly');
  }, 1000); // delay before launch
});