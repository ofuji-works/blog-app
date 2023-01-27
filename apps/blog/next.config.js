const withPlugins = require('next-compose-plugins')

// bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withT = require('next-transpile-modules')(['@packages/ui'])

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

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs')
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withPlugins(
  [
    (nextConfig) => withSentryConfig(nextConfig, sentryWebpackPluginOptions),
    (nextConfig) => withT(nextConfig),
    withBundleAnalyzer,
  ],
  moduleExports,
)
