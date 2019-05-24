import { Router } from 'express'
import UserController from '../controllers/UserController'

const motoristRouter = Router()
//CRUD
motoristRouter.get('/', UserController.find)
motoristRouter.get('/:id', UserController.findById)
motoristRouter.post('/', UserController.create)
motoristRouter.patch('/:id', UserController.updateOne)
// motoristRouter.put('/', UserController.update)
// motoristRouter.delete('/:id', UserController.delete)

//authentication


//freights
motoristRouter.get('/:id/freights', UserController.findById)
motoristRouter.get('/:id/freights/:id', UserController.findById)


export default motoristRouter
