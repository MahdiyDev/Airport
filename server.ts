import { Application } from 'express'
const express = require('express')
import router from './Routes/'

const app: Application = express()

app.use(express.json())
app.use(router)

const port = process.env.PORT || 4100

app.listen(port, () => {
    console.log('app is running on http://localhost:' + port);
})
