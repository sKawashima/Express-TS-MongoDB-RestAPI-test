import * as express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!!'))

app.get('/api/v1', (req, res) => {
  res.json({
    message: 'hello Express API',
    // req: req,
    // res: res
  })
  console.log(req.query['a'])
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`))
