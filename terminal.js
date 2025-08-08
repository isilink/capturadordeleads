const output = document.getElementById("output");
const input = document.getElementById("cmd");
const socket = new WebSocket("ws://" + location.host);

socket.onmessage = (event) => {
  output.innerText += event.data + "\n";
  output.scrollTop = output.scrollHeight;
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    if (cmd === "") return;

    output.innerText += "> " + cmd + "\n";
    
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(cmd);
    } else {
      output.innerText += "[ERRO] Conexão com o servidor ainda não está pronta.\n";
    }

    input.value = "";
  }
});
