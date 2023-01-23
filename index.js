const path = require('path')
const fs = require('fs')
const express = require('express')

let test1 = path.resolve(__dirname, 'test1.html');
let test2 = path.resolve(__dirname, 'test2.html');

const app = express();

app.use('/test2', (req, res) => {
// читаем файл `index.html`
    let indexHTML = fs.readFileSync(test2, {
        encoding: 'utf8',
    });

// устанавливаем заголовок и статус
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.use('/', (req, res) => {
// читаем файл `index.html`
    let indexHTML = fs.readFileSync(test1, {
        encoding: 'utf8',
    });

// устанавливаем заголовок и статус
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.listen(8080, () => console.log(`Server started on port ${8080}`))