const express = require('express');
const { exec } = require('child_process');
const WebSocket = require('ws');
const app = express();

app.use(express.static('public'));

const server = app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    const comando = msg.toString();
    console.log(comando);
    exec(comando, { shell: '/bin/bash' }, (err, stdout, stderr) => {
      const output = stdout || stderr || err?.message || '[sem saída]';
      ws.send(output);
    });
  });
});
