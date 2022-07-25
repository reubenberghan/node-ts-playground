import appHandler from './app'
import express from 'express'

const app = express()
const port = 3000

app.get('/', appHandler)

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`)
})
