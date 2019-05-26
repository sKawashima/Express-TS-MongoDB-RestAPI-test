import * as express from 'express'
export const userRouter = express.Router()
import {UserModel} from '../model/userModel'

userRouter.get('/test', (req, res) => {
  res.json({
    message: 'This is user.ts response'
  })
})

userRouter.post('/', (req, res) => {
  const User = new UserModel()

  User.name = req.query.name
  User.screen_name = req.query.screen_name
  User.bio = req.query.bio

  User.save((err) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json({
        message: 'success'
      })
    }
  })
})
