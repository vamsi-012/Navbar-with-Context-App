// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderDarkNotFoundTheme = () => (
        <div className="dark-not-found-theme-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-theme"
          />
          <h1 className="not-found-title">About</h1>
          <p className="not-found-description">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      const renderLightNotFoundTheme = () => (
        <div className="light-not-found-theme-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-theme"
          />
          <h1 className="not-found-title">Lost Your Way?</h1>
          <p className="not-found-description">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      return (
        <div className="not-found-container">
          <Navbar />
          {isDarkTheme ? renderDarkNotFoundTheme() : renderLightNotFoundTheme()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
