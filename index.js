const express = require('express')
const app = express()
// const port = 3001
require('dotenv').config();
app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World</h1>')
})
app.post('/', (req, res) => {
  res.status(200).send("this is my second commit")
  console.log(req)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})