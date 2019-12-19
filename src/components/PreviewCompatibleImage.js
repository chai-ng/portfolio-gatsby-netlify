import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderTopLeftRadius: '5px', borderTopRightRadius: '5px', height: '100px', width: '100%', objectFit: 'cover' }
  const { alt = '', image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} key={image.childImageSharp.fluid.src} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={image.childImageSharp.fluid} key={image.childImageSharp.fluid.src} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} key={image.childImageSharp.fluid.src}/>

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
