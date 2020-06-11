const express = require('express')

const app = express()

app.enable('trust proxy')

app.get('/', (req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.path}`)
  res.send("Hello, Hiroshi")
})

app.listen(8370, '0.0.0.0', () => {
  console.info('Server is running at 8370')
})
