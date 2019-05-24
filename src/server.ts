import app from './app'

app.listen(process.env.DB_PORT || 3000, (): void => {
  console.log('server Running: ', process.env.DB_HOST || 'localhost', ':', process.env.DB_PORT || 3000)
})
