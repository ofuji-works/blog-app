import { NextPageContext } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'

import { captureExceptionForSentry, flushForSentry } from '@/libs'
interface AppErrorProps extends ErrorProps {
  err?: Error
  hasGetInitialPropsRun?: boolean
}

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: AppErrorProps) => {
  if (!hasGetInitialPropsRun && err) {
    captureExceptionForSentry(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async (context: NextPageContext) => {
  const errorInitialProps: AppErrorProps = await NextErrorComponent.getInitialProps(context)

  const { res, err, asPath } = context

  errorInitialProps.hasGetInitialPropsRun = true

  if (res?.statusCode === 404) {
    return errorInitialProps
  }

  if (err) {
    captureExceptionForSentry(err)
    await flushForSentry(2000)

    return errorInitialProps
  }

  captureExceptionForSentry(new Error(`_error.js getInitialProps missing data at path: ${asPath}`))
  await flushForSentry(2000)

  return errorInitialProps
}

export default MyError
