import * as express from 'express'
export const imageRouter = express.Router()

imageRouter.get('/', (req, res) => {
  res.send(
    '<form method="POST" action="/api/image" enctype="multipart/form-data">' +
    '<input type="file" name="upFile" /><br />' +
    '<input type="submit" value="アップロード" />' +
    '</form>'
  )
})

import * as multer from "multer"
import * as path from 'path'

const uploadDir = multer({
  dest: path.join(__dirname, "upload")
})

imageRouter.post('/', uploadDir.single('upFile'), (req, res) => {
  console.log("アップロードしたファイル名： " + req.file.originalname)
  console.log("保存されたパス：" + req.file.path)
  console.log("保存されたファイル名： " + req.file.filename)
})
