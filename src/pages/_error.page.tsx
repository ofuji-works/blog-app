import { NextPageContext } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'

import { captureExceptionForSentry, flushForSentry } from '@/libs'
interface AppErrorProps extends ErrorProps {
  err?: Error
  hasGetInitialPropsRun?: boolean
}

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: AppErrorProps) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    captureExceptionForSentry(err)
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async (context: NextPageContext) => {
  const errorInitialProps: AppErrorProps = await NextErrorComponent.getInitialProps(context)

  const { res, err, asPath } = context

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true

  // Returning early because we don't want to log 404 errors to Sentry.
  if (res?.statusCode === 404) {
    return errorInitialProps
  }

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    captureExceptionForSentry(err)

    // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses
    await flushForSentry(2000)

    return errorInitialProps
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  captureExceptionForSentry(new Error(`_error.js getInitialProps missing data at path: ${asPath}`))
  await flushForSentry(2000)

  return errorInitialProps
}

export default MyError