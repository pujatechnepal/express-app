const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.status(200).send('This is my first express application')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})