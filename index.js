const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.post('/', function (req, res) {
  console.log(req.body)
  res.json(req.body)
  res.sendStatus(200)
})
app.listen(port, () => {
	console.log(`listenin omm ${port}`)
})
