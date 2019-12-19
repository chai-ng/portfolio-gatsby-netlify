import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map(item => (
      <div key={item.text} className="column">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                display: 'inline-block',
                backgroundImage: `url('${item.image.publicURL}')`,
                backgroundPosition: 'cover',
                height: '60px',
                width: '60px',
                paddingBottom: '10px'
              }}
            >
              {/* <PreviewCompatibleImage imageInfo={item.image} /> */}
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
