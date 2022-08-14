const LINKS = {
  "/": "https://www.farisashai.me",
  "/referral":
    "https://docs.google.com/forms/d/e/1FAIpQLSeysjazMhBmZ3PmO4bPD6NXHjwTM8eQFloR-1-3I3FS3zaO-g/viewform?usp=sf_link",
  "/devpost": "https://devpost.com/farisashai",
  "/github": "https://github.com/farisashai/",
  "/spotify": "https://open.spotify.com/user/ksjumrnqm89h68mommnjevzqg?si=2442253c04f34d21",
  "/linkedin": "https://www.linkedin.com/in/farisashai/",
  "/facebook": "https://www.facebook.com/farisashai/",
  "/instagram": "https://www.instagram.com/farisashai/",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => {
    const paths = Object.keys(LINKS).map(key => ({
      source: key,
      destination: LINKS[key],
      permanent: true,
    }));
    return paths;
  },
};

module.exports = nextConfig;
