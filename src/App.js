import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

const App = () => (
  <>
    <GlobalStyles />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Choreboard</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="p-10 rounded-md shadow-md bg-blue-500 mx-2">
      <p className="text-white text-2xl">Hello world</p>
    </div>
  </>
)
export default App
