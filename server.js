const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3001


app.use(cors())
app.use(express.json())


app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
