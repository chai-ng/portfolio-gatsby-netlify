import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { ProjectPostTemplate } from '../../templates/project-post'
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #1D3461, -0.5rem 0 0 #1D3461',
              backgroundColor: '#1D3461',
              color: 'white',
              padding: '1rem',
            }}
          >
            Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <ProjectRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
