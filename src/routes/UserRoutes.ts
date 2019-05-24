import { Router } from 'express'
import UserController from '../controllers/UserController'

const userRoutes = Router()

userRoutes.get('/', UserController.find)
userRoutes.get('/:id', UserController.findById)

userRoutes.post('/', UserController.create)
userRoutes.put('/', UserController.update)
userRoutes.patch('/:id', UserController.updateOne)
userRoutes.delete('/:id', UserController.deleteOne)

export default userRoutes
