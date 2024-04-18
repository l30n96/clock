const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

let timer = 1200; // 20 Minuten in Sekunden
let interval;

function startTimer() {
    interval = setInterval(() => {
        timer--;
        if (timer <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}

app.get('/timer', (req, res) => {
    res.json({ timer: timer });
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server läuft auf Port ' + (process.env.PORT || 3000));
    startTimer();
});
