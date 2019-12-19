import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, widgetFor }) => (
  <ProjectPostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    summary={entry.getIn(['data', 'summary'])}
    github={entry.getIn(['data', 'github'])}
    demo={entry.getIn(['data', 'demo'])}
    tags={entry.getIn(['data', 'tags'])}
    coverimage={entry.getIn(['data', 'coverimage'])}
  />
)

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPostPreview