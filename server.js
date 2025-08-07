const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)

const PORT = 8080
server.listen(PORT, () => {
  console.log(`JSON Server está rodando em http://localhost:${PORT}`)
})
