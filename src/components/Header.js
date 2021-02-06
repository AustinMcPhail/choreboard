import { Helmet } from 'react-helmet'

const Header = () => {
  console.log('Header works')
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Choreboard</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Header
