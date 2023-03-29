import * as Sentry from '@sentry/nextjs'

export const captureExceptionForSentry = (err: Error) => {
  Sentry.captureException(err)
}
export const flushForSentry = (timeout: number) => {
  Sentry.flush(timeout)
}
