import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns overflow is-mobile">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-one-third-desktop is-half-tablet is-full-mobile" key={post.id}>
              <div className="card">
                    <div className="card-content is-child has-text-centered">
                      <div className="content">
                        <a href={post.fields.slug}>
                          <p className="title is-4">{post.frontmatter.title}</p>
                          <p className="subtitle is-6">{post.frontmatter.summary}</p>
                          <div className="tags">
                            {post.frontmatter.tags.map(tag => (
                              <span className="tag" key={tag + `tag`}>{tag}</span>
                            ))}
                          </div>
                        </a>
                      </div>
                    </div>
                  <footer className="card-footer">
                    <a href = {post.frontmatter.demo} className="card-footer-item" target="_blank">
                      View Demo
                    </a>
                    <a href = {post.frontmatter.github} className="card-footer-item" target="_blank">
                      View on Github
                    </a>
                  </footer>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                summary
                github
                demo
                date(formatString: "MMMM DD, YYYY")
                tags
                coverimage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100, grayscale: true) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)
