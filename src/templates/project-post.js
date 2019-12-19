import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  github,
  demo,
  coverimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container">
    <section className="hero is-medium">
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          // eslint-disable-next-line no-extra-boolean-cast
          !!coverimage.childImageSharp ? coverimage.childImageSharp.fluid.src : coverimage
        })`,
        backgroundAttachment: `fixed`,
      }}
    ></div>
    </section>
    
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
                </div>
              </div>
              <div className="level-right">
                <div className="buttons level-item">
                  <a className="button is-small" href={github} target="_blank">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <div className="level-right">

                    </div>
                    <span>GitHub</span>
                  </a>
                  <a className="button is-small" href={demo} target="_blank">
                    <span className="icon">
                      <i className="fas fa-globe-asia"></i>
                    </span>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

ProjectPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  coverimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  demo: PropTypes.string,
  github: PropTypes.string
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="summary"
              content={`${post.frontmatter.summary}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        github={post.frontmatter.github}
        demo={post.frontmatter.demo}
        coverimage={post.frontmatter.coverimage}
      />
    </Layout>
  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        github
        demo
        date(formatString: "MMMM DD, YYYY")
        tags
        coverimage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
