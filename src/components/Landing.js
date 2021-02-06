import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import styled from 'styled-components'
import Brand from './Brand'

const LandingStyled = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
`

const Landing = () => {
  const uiConfig = {
    signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  return (
    <LandingStyled>
      <div className="flex-grow grid place-items-center place-content-center">
        <Brand />
      </div>
      <div className="mb-10">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </LandingStyled>
  )
}

export default Landing
