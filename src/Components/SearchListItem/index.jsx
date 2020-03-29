import React from 'react'
import './searchListItem.css'

const SearchListItem = ({
  data,
  imgHeight,
  imgWidth,
  componentClassName
}) => {
  const {imageUrl,
    title,
    actionUrl,
    discount,
    price,
    discountedPrice,
    sizeVariation,
    subTitle } = data
  const navigateTo = () => {
    window.location.href = `https://www.nykaafashion.com${actionUrl}`
  }
  return (
    <li className={`search-list-item ${componentClassName ? componentClassName: ''}`} onClick={navigateTo}>
      <div>
          <img
            src={imageUrl}
            loading="lazy"
            alt={title}
            height={imgHeight}
            width={imgWidth}
          />
      </div>
      <div className="item-details">
        <div className="product-title">{title}</div>
        <div className="product-subtitle">{subTitle}</div>
        <div className="flex">
          <div className="product-discount-price">₹{discountedPrice}</div>
          <div className="product-price">₹{price}</div>
          <div className="product-discount">{discount} % off</div>
        </div>
        <div className="flex flex-wrap">
          {
            sizeVariation && sizeVariation.length && sizeVariation.map((el, index) => (
              <div key={el.id} className="product-size">
                {el.title}{index === sizeVariation.length - 1 ? '' : ','}
              </div>
            ))
          }
        </div>
      </div>
    </li>
  )
}

export default SearchListItem