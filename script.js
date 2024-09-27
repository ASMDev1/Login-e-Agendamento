const labels = document.querySelectorAll('.form-control label');

labels.forEach((label, idx) => {
  const labelText = label.innerText;
  const spannedText = labelText.split('').map((letter, index) => {
    return `<span style="transition-delay:${index * 50}ms">${letter}</span>`;
  }).join('');
  label.innerHTML = spannedText;
});

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "tue@exemple.com" && password === "333") {
    alert("Login bem-sucedido!");
    window.location.href = "agendamento.html";
  } else {
    alert("Usuário ou senha incorreta");
  }
});
document.getElementById("agendamentoForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Consulta confirmada. Favor aguardar o Doutor(a) no horário marcado.");
  
  window.location.href = "index.html";
});
if (localStorage.getItem("agendamentoConfirmado")) {
  alert("Agendamento Confirmado!");
  localStorage.removeItem("agendamentoConfirmado");
}