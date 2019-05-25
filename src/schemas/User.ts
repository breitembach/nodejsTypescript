import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from '../models/User'
import bcrypt from 'bcrypt'

export interface UserModel extends UserInterface, Document {
  fullName(): string

}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  children: [{ type: Schema.Types.ObjectId, ref: 'reference' }]
}, {
  timestamps: true
})

UserSchema.pre<UserModel>('save', async function (): Promise<void> {
  this.password = await bcrypt.hash(this.password.toString(), 10)
})

UserSchema.methods.fullName = function (): string {
  return (this.firstName.trim() + ' ' + this.lastName.trim())
}

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
