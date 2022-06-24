import { server } from './server'
import { worker } from './browse'

export const listen = () => {
  if (typeof window === 'undefined') {
    server.listen()
  } else {
    worker.start()
  }
}

export const resetHandler = () => {
  if (typeof window === 'undefined') {
    server.resetHandlers()
  } else {
    worker.resetHandlers()
  }
}

export const close = () => {
  if (typeof window === 'undefined') {
    server.close()
  } else {
    worker.stop()
  }
}

export * from './blog'
export * from './tag'
