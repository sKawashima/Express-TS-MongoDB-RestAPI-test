import * as express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!!'))

import {router} from './api/'
app.use('/api/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`))
