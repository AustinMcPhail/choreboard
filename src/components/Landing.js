import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import styled from 'styled-components'

const LandingStyled = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;

  .title {
    &:after {
      content: 'Chore Board';
      display: block;
      text-align: center;
      color: black;
      mix-blend-mode: overlay;
    }
  }
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
        <div className="relative">
          <h1 className="title text-center text-6xl mb-0 font-bold relative">
            <div className="bg-blue-200 rounded-3xl w-full h-60 grid place-items-center absolute transform translate-x-1/2 -translate-y-1/2" />
          </h1>
        </div>
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
