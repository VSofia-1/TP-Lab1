const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Configurar el middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configurar la base de datos SQLite
const db = new sqlite3.Database('./medals.db');

// Crear la tabla si no existe
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS medals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        country TEXT NOT NULL,
        gold INTEGER NOT NULL,
        silver INTEGER NOT NULL,
        bronze INTEGER NOT NULL
    )`);
});

// Ruta para agregar medallas
app.post('/api/medals', (req, res) => {
    const { country, gold, silver, bronze } = req.body;
    db.run('INSERT INTO medals (country, gold, silver, bronze) VALUES (?, ?, ?, ?)', [country, gold, silver, bronze], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json({ id: this.lastID, country, gold, silver, bronze });
    });
});

// Ruta para obtener medallas
app.get('/api/medals', (req, res) => {
    db.all('SELECT * FROM medals', (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(rows);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
