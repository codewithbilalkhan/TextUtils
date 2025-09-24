import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Switches Section */}
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 ms-lg-3">
            {/* Dark/Light Mode */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.togglemode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
              </label>
            </div>

            {/* Red Mode */}
            <div className={`form-check form-switch text-danger`}>
              <input
                className="form-check-input"
                onClick={props.togglredemode}
                type="checkbox"
                role="switch"
                id="switchRedMode"
                checked={props.mode === 'red'}
                readOnly
              />
              <label className="form-check-label" htmlFor="switchRedMode">
                Enable {props.mode === 'red' ? 'Light' : 'Red'} Mode
              </label>
            </div>

            {/* Blue Mode */}
            <div className="form-check form-switch text-primary">
              <input
                className="form-check-input"
                onClick={props.togglbluemode}
                type="checkbox"
                role="switch"
                id="switchblueMode"
                checked={props.mode === 'blue'}
                readOnly
              />
              <label className="form-check-label" htmlFor="switchblueMode">
                Enable {props.mode === 'blue' ? 'Light' : 'Blue'} Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "This is navbar"
}
