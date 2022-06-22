if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen()
} else {
  const { worker } = require('./browse')
  worker.start()
}
export {}
