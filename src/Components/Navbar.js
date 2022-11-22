import React from 'react'
import { TiWeatherPartlySunny } from '@react-icons/all-files/ti/TiWeatherPartlySunny'

const Navbar = ({ theme, toggleTheme }) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid ">
          <h1 className="navbar-brand mt-2" style={{ fontSize: "1.9rem" }}>Weather Application <TiWeatherPartlySunny size={40} /> </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='d-flex px-4'>
              <button className={`btn btn-${theme === "light" ? "dark" : "light"}`}
                onClick={() => toggleTheme()}>ToggleTheme </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar