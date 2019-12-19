import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin-icon.png'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Chai Ng" style={{ width: '88px' }} />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="#projects">
                Projects
              </Link>
              <Link className="navbar-item" to="#opinions">
                Opinions
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/chaisheanng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{
                  fontSize: '1.5rem'
                }}>
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://github.com/chai-ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{
                  fontSize: '1.5rem'
                }}>
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a href="#contact" className="navbar-item">
                <span className="button is-small is-outlined is-inverted is-rounded">Say Hello</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
