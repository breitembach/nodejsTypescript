import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import morgan from 'morgan'
import userRoutes from './routes/UserRoutes'
import Authentication from './oauth/Authentication'
// import motoristPublicRoutes from './routes/MotoristPublicRoutes'
// import Authentication from './oauth/Authentication'

// https://www.npmjs.com/package/passport-jwt

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.initEnviroment()
    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))
  }

  private database (): void {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
  }

  private routes (): void {
    // this.express.use('/api/v1/users', motoristPublicRoutes)
    this.express.use('/api/v1/users', Authentication.isAutenticated, userRoutes)
    // this.express.use('motorists', motoristRoutes)
  }

  private initEnviroment (): void {
    if (process.env.NODE_ENV === 'development') {
      dotenv.config() // default is .env
    }
  }
}

export default new App().express
