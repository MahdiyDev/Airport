import { Application } from 'express'
const express = require('express')
const cors = require('cors')
import router from './Routes/'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT || 4100

app.listen(port, () => {
    console.log('app is running on http://localhost:' + port);
})
