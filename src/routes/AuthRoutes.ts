import { Router } from 'express'
import UserController from '../controllers/UserController'
import Authentication from '../oauth/Authentication';

const userRoutes = Router()

// userRoutes.get('/oauth/token', Authentication.autentication)


export default userRoutes
