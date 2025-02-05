/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js'

const ANGULAR_HOST = 'http://localhost:3012'

/** @type {import("next").NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: '/angular',
        destination: `${ANGULAR_HOST}/angular`,
      },
      {
        source: '/angular/:path+',
        destination: `${ANGULAR_HOST}/angular/:path+`,
      },
      {
        source: '/angular-static/_next/:path+',
        destination: `${ANGULAR_HOST}/angular-static/_next/:path+`,
      },
    ]
  },
}

export default config
