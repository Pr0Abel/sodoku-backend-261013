require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 8080

app.get('/', (req, res) => res.status(200).json('Hello World!'))

app.listen(port, (error) => {
    if (error) {
        console.warn(error)
    } else {
        console.log('Server is running on port ', port)
    }
})