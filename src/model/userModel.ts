import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  screen_name: String,
  bio: String
})

export const UserModel = mongoose.model('UserModel', UserSchema)
