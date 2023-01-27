import * as Sentry from '@sentry/nextjs'

const isProduction = () => process.env.NODE_ENV === 'production'

export const captureExceptionForSentry = (err: Error) => {
  if (isProduction()) {
    Sentry.captureException(err)
  }
}
export const flushForSentry = (timeout: number) => {
  if (isProduction()) {
    Sentry.flush(timeout)
  }
}
