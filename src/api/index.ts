import * as express from 'express'
export const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'hello Express API',
  })
})

// Routerの中にRouterを作る：細分化してAPIを管理する
// できればこっちの書き方のみを使いたい
import {userRouter} from './user'
router.use('/user', userRouter)

import {imageRouter} from './image'
router.use('/image', imageRouter)
