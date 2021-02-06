import React, { useState, useEffect } from 'react'
import { useFirebaseUser } from '../utils/hooks'
import fire, { getUserInfo } from '../utils/fire'

function Profile() {
  // console.log(props.routerProps.match.params.id)
  // console.log(match)
  const [isHelp, setIsHelp] = useState()

  useEffect(
    () => () => {
      getUserInfo(1)
    },
    []
  )

  const user = useFirebaseUser()
  return (
    <div className="flex flex-col">
      <div className="bg-gray-500 w-48 h-48 rounded-full mx-auto mt-5">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt=""
          className="rounded-full"
        />
      </div>
      <h2 className="mt-5 mb-0 mx-auto">user</h2>
      <h3 className="mt-1 mb-0 mx-auto text-sm">Community Helper</h3>
      <h3 className="mt-1 mb-0 mx-auto text-sm">*****</h3>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <h3 className="text-base">Jobs Complete</h3>
          <h3 className="mt-0 text-sm text-center">content</h3>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base">Average Complete Time</h3>
          <h3 className="mt-0 text-sm text-center">content</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile
