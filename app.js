const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Sample api is working...!')
})

app.listen(port, () => {
  console.log(`Good to see app listening on port ${port}`)
})