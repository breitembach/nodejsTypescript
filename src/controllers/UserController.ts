import { Request, Response } from 'express'
import { User } from '../schemas/User'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import AWS from 'aws-sdk'

// var jwt = require('jsonwebtoken')

// class ApiResponse {
//   message:String;

//   constructor(
//     message: String = "undefined",
//     success: boolean = false,
//     object:Object = {}
//   ) {

//   }
// }

// @TODOO ALL METHODS ....
class UserController {
  public async find (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()

      return res.status(200).json(users)
    } catch (error) {
      // return res.status(500).json(new ApiResponse("dasd",false, ));
    }
  }

  public async findById (req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params['id']

      const user = await User.findOne({ id })

      return res.status(200).json(user)
      // bcrypt.compareSync("adsd", "adsa");
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.status(201).json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.update({ id: req.params.id }, req.body, { upsert: true })

    return res.json(user)// @TODO STATUS
  }

  public async updateOne (req: Request, res: Response): Promise<Response> {
    const user = await User.updateOne({ id: req.params.id }, req.body)

    return res.json(user) // @TODO STATUS
  }

  public async updateById (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)// @TODO STATUS
  }

  public async deleteOne (req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    await User.deleteOne({ id }, req.body)

    return res.status(204)
  }
}

export default new UserController()
