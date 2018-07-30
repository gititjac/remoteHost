const express = require ('express')
const app = express()

app.get('/', (req, res) => res.send('SO - MANY - STEPS!!!'))

app.listen(3010, ()=> console.log('Example app listening on port 3010'))