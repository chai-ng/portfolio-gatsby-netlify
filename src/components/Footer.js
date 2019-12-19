import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from 'gatsby'

import ContactForm from '../pages/contact/index'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer has-background-primary-inverted">
        <div className="content has-text-centered has-background-primary-inverted">
          <div className="container has-background-primary-inverted">
              <div className="column">
                <a id="contact-form">
                  <ContactForm/>
                </a>
                <p>Built with Gatsby, Netlify CMS and Bulma &#169; {(new Date()).getFullYear()}</p>
              </div>
          </div>
        </div>
      </footer>
    )
  }
}
