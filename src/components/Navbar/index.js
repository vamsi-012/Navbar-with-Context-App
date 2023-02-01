// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const renderDarkTheme = () => (
        <div className="dark-theme-bg-container">
          <nav className="nav-container">
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
            <ul className="nav-link-container">
              <Link to="/" className="nav-link-dark">
                <li>Home</li>
              </Link>
              <Link to="/about" className="nav-link-dark">
                <li>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={onClickToggleTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            </button>
          </nav>
        </div>
      )

      const renderLightTheme = () => (
        <div className="light-theme-bg-container">
          <nav className="nav-container">
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
            <ul className="nav-link-container">
              <Link to="/" className="nav-link-light">
                <li>Home</li>
              </Link>
              <Link to="/about" className="nav-link-light">
                <li>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={onClickToggleTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            </button>
          </nav>
        </div>
      )

      return <>{isDarkTheme ? renderDarkTheme() : renderLightTheme()}</>
    }}
  </ThemeContext.Consumer>
)

export default Navbar
