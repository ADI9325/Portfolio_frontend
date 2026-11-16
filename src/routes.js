import mywork_data from './assets/mywork_data'

// Each page is a real URL: "/" is the home page, "/work/<slug>" is a case study.
export const findProject = (path = '/') => {
  const match = path.match(/^\/work\/([^/]+)\/?$/)
  return match ? mywork_data.find((p) => p.slug === match[1]) : undefined
}

export const routes = ['/', ...mywork_data.map((p) => `/work/${p.slug}/`)]
