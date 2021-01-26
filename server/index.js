const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => {
    const shouldFail = Math.floor(Math.random() * 10) % 2 === 0;
    if(shouldFail){
        res.status(500).end();
    } else{
        res.send('Hello World!')
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})