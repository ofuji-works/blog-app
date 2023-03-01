// bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withT = require('next-transpile-modules')(['@packages/ui'])

const { withSentryConfig } = require('@sentry/nextjs')
const sentryWebpackPluginOptions = {
  silent: true,
}

/**
 * @type {import("next").NextConfig}
 */
const moduleExports = {
  // Your existing module.exports
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  optimizeFonts: true,
  pageExtensions: ['page.tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = () => {
  const plugins = [withT, withSentryConfig, withBundleAnalyzer]
  return plugins.reduce((acc, next) => {
    if (next.name === 'withSentryConfig') {
      return next(acc, sentryWebpackPluginOptions)
    }
    return next(acc)
  }, moduleExports)
}
