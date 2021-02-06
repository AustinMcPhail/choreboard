import { useEffect, useState } from 'react'
import firebase from 'firebase/app'

export function useFirebaseUser() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setUser(u)
    })
  }, [])

  return user
}
