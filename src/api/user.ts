import * as express from 'express'
export const userRouter = express.Router()

userRouter.get('/test', (req, res) => {
  res.json({
    message: 'This is user.ts response'
  })
})
