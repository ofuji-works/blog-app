// https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview: (url: string) => void = (url) => {
//   if (window !== undefined) {
//     if (!GA_TRACKING_ID) {
//       console.error('undefined GA_TRACKING_ID')
//       return
//     }
//     window.gtag('config', GA_TRACKING_ID, {
//       page_path: url,
//     })
//   }
// }

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }: { [key: string]: string }) => {
//   if (window !== undefined) {
//     window.gtag('event', action, {
//       event_category: category,
//       event_label: label,
//       value: value,
//     })
//   }
// }
