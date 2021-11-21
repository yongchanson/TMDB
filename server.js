const express = require('express');
const path = require('path');


let initial_path = path.join(__dirname, "movie");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "detail.html"));
})

app.use((req, res) => {
    res.json("404 Not Found!");
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listenting on http://localhost:${PORT}`);
})

