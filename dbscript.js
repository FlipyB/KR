const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5501;


app.use(cors());


const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err.message);
        return;
    }
    console.log('Подключено к SQLite.');
});


app.use(express.json());


app.post('/api/add', (req, res) => {
    const { address, energy_amount, price, total } = req.body;
    const query = `
        INSERT INTO energy_not_payed (address, energy_amount, price, total) 
        VALUES (?, ?, ?, ?)
    `;
    db.run(query, [address, energy_amount, price, total], function (err) {
        if (err) {
            console.error('Ошибка добавления строки:', err.message);
            res.status(500).send('Ошибка добавления строки');
            return;
        }
        res.status(201).send(`Строка добавлена с ID: ${this.lastID}`);
    });
});

app.post('/api/add_payed', (req, res) => {
    const { address, energy_amount, price, total } = req.body;
    const query = `
        INSERT INTO energy_payed (address, energy_amount, price, total) 
        VALUES (?, ?, ?, ?)
    `;
    db.run(query, [address, energy_amount, price, total], function (err) {
        if (err) {
            console.error('Ошибка добавления строки:', err.message);
            res.status(500).send('Ошибка добавления строки');
            return;
        }
        res.status(201).send(`Строка добавлена с ID: ${this.lastID}`);
    });
});


// Эндпоинт для удаления строк с определённым address
app.delete('/api/delete/:address', (req, res) => {
    const address = req.params.address; 
    const query = `DELETE FROM energy_not_payed WHERE address = ?`;

    db.run(query, [address], function (err) {
        if (err) {
            console.error('Ошибка удаления строк:', err.message);
            res.status(500).send('Ошибка удаления строк');
            return;
        }

        if (this.changes === 0) {
            res.status(404).send('Строки с указанным address не найдены');
        } else {
            res.status(200).send(`Удалено строк: ${this.changes}`);
        }
    });
});

// Эндпоинт для получения суммы полей total по address
app.get('/api/sum/:address', (req, res) => {
    const address = req.params.address; 
    const query = `SELECT SUM(total) AS total_sum FROM energy_not_payed WHERE address = ?`;

    db.get(query, [address], (err, row) => {
        if (err) {
            console.error('Ошибка вычисления суммы:', err.message);
            res.status(500).send('Ошибка вычисления суммы');
            return;
        }

        // Если строк с таким address нет, возвращаем 0
        if (!row || row.total_sum === null) {
            res.json({ total_sum: 0 });
        } else {
            res.json(row); 
        }
    });
});


app.get('/api/sum/energy_amount/:address', (req, res) => {
    const address = req.params.address; 

    // SQL запрос для получения суммы energy_amount для заданного address
    const query = `
        SELECT SUM(energy_amount) AS total_energy
        FROM energy_not_payed
        WHERE address = ?
    `;

    db.get(query, [address], (err, row) => {
        if (err) {
            console.error('Ошибка при вычислении суммы:', err.message);
            res.status(500).send('Ошибка при вычислении суммы');
            return;
        }

        
        if (!row || row.total_energy === null) {
            res.json({ total_energy: 0 });
        } else {
            res.json(row); 
        }
    });
});



app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM energy_payed'; 
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err.message);
            res.status(500).send('Ошибка выполнения запроса');
            return;
        }
        res.json(rows); 
    });
});




app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
