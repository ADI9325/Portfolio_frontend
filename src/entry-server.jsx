import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import mywork_data from './assets/mywork_data'
import { findProject, routes } from './routes'

export { mywork_data, findProject, routes }

export function render(path) {
  return renderToString(<App path={path} />)
}
