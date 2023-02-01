// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderDarkThemeHome = () => (
        <div className="dark-theme-about-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
            className="about-theme"
          />
          <h1 className="about-title">About</h1>
        </div>
      )

      const renderLightThemeHome = () => (
        <div className="light-theme-about-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
            className="about-theme"
          />
          <h1 className="about-title">About</h1>
        </div>
      )

      return (
        <div className="about-container">
          <Navbar />
          {isDarkTheme ? renderDarkThemeHome() : renderLightThemeHome()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
