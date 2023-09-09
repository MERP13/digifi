export function getUrl() {
  return process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : 'https://coflow.netlify.app/' + process.env.NEXT_PUBLIC_PORT
}
