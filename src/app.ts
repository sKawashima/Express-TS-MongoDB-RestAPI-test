import * as express from 'express'
import * as mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ExpressAPI', { useNewUrlParser: true })
mongoose.connection.on('error', (err: string) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1);
})

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!!'))

import {router} from './api/'
app.use('/api/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`))
