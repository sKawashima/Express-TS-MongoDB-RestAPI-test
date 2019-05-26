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

  User.save((err: string) => {
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

userRouter.get('/', (req, res) => {
  UserModel.find()
    .then((users: string[]) => {
      res.json(users)
    })
})

userRouter.get('/:id', (req, res) => {
  const UserId = req.params.id

  UserModel.findById(UserId, (err: string, user: string[]) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json(user)
    }
  })
})
