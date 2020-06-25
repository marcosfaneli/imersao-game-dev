const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
        return res.sendFile(path.join(__dirname, '/app/index.html'));
})

app.use(express.static(path.join(__dirname, '/app/scripts')))
app.use(express.static(path.join(__dirname, '/app/images')))
app.use(express.static(path.join(__dirname, '/app/sounds')))
app.use(express.static(path.join(__dirname, '/app/styles')))
app.use(express.static(path.join(__dirname, '/app/')))


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening at ${PORT}`))