const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.send("Hello from NodeJS")
})

app.listen(8370)
