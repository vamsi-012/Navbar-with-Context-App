// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderDarkThemeHome = () => (
        <div className="dark-theme-home-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
            className="home-theme"
          />
          <h1 className="home-title">Home</h1>
        </div>
      )

      const renderLightThemeHome = () => (
        <div className="light-theme-home-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
            className="home-theme"
          />
          <h1 className="home-title">Home</h1>
        </div>
      )

      return (
        <div className="home-container">
          <Navbar />
          {isDarkTheme ? renderDarkThemeHome() : renderLightThemeHome()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
