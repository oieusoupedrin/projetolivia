
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


require ('./controllers/propostaController')(app)

app.listen(port, () => {
  console.log(`Api is listening on port ${port}`)
})

