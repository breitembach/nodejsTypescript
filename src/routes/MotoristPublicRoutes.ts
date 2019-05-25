
import { Router } from 'express'
import UserController from '../controllers/UserController'

const motoristPublicRouter = Router()

motoristPublicRouter.get('/login', UserController.findById)
motoristPublicRouter.get('/register', UserController.findById)
motoristPublicRouter.post('/oauth/token', UserController.findById)

export default motoristPublicRouter
