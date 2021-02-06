import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Brand from './Brand'
import fire from '../utils/fire'

const NavStyles = styled.nav`
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    li {
      a {
        display: block;
        padding: 1rem;
        text-decoration: none;
      }
    }
  }
`

const Nav = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <NavStyles>
      <div className="flex justify-between items-center">
        <div className="p-4">
          <button
            className="text-blue-500"
            type="button"
            onClick={() => setShowNav(!showNav)}
          >
            <svg
              className="w-6 h-6 transform scale-150"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="justify-end">
          <Brand />
        </div>
      </div>
      {showNav && (
        <div className="w-full">
          <ul>
            <li>
              <Link to="/chores">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          <div className="flex w-100 justify-center">
            <button
              className="py-1 px-4 text-red-500"
              onClick={() => fire.auth().signOut()}
              type="button"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </NavStyles>
  )
}

export default Nav
