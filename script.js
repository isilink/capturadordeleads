document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    alert("Voltando ao menu...");
  } else if (e.key === "F2") {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nasc = document.getElementById("nasc").value;

    alert(`Usuário salvo:\n${nome} - ${email} - ${nasc}`);
  }
})