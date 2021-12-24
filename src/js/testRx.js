const input = document.querySelector('.mail');

function handleInput(email) {
  console.log(email);
}

input.addEventListener('input', (ev) => {
  handleInput(ev.target.value);
});
