// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveImage(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
