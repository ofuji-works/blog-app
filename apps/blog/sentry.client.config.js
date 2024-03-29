import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
Sentry.init({
  dsn: SENTRY_DSN,
  debug: process.env.NODE_ENV === 'development',
  env: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})
