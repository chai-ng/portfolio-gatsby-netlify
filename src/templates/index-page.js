import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ProjectRoll from '../components/ProjectRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          // eslint-disable-next-line no-extra-boolean-cast
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#1D3461 0.5rem 0px 0px, #1D3461 -0.5rem 0px 0px',
            backgroundColor: '#1D3461',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#1D3461 0.5rem 0px 0px, #1D3461 -0.5rem 0px 0px',
            backgroundColor: '#1D3461',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{mainpitch.description}</h3>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12">
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <a className="same-page-anchor" id="projects"></a>
              <div>
                <h3 className="has-text-weight-semibold is-size-2 is-paddingless">
                  Projects
                </h3>
                <br/>
                <ProjectRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/projects">
                    All projects
                  </Link>
                </div>
              </div>
              <a className="same-page-anchor" id="opinions"></a>
              <div>
                <h3 className="has-text-weight-semibold is-size-2">
                  Latest opinions
                </h3>
                <br/>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/opinions">
                    All opinions
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                base64
              }
            }
          }
          subheading
          mainpitch {
            title
            description
          }
          description
          intro {
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    base64
                  }
                }
              }
              text
            }
          }
        }
      }
  }
`
