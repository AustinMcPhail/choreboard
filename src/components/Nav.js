import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Brand from './Brand'

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Nav = () => (
  <NavStyles>
    <div className="p-4">
      <button className="text-blue-500" type="button">
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
    <div className="transform scale-50">
      <Brand />
    </div>
    {/* <ul>
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
              strokeWidth="2"
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
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </Link>
      </li>
    </ul> */}
  </NavStyles>
)

export default Nav
