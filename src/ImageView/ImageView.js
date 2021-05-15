import React from "react"

import { Link } from "react-router-dom"

import "./ImageView.css"

const ImageView = (props) => {
  console.log(props.location.state.image)
  const { largeImageURL: image, user: owner, tags, pageURL } = props.location.state.image
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="imageView__container">
            <img src={image} alt={tags} className="imageView__img img-responsive" />
            <div className="imageView__text">
              <button className="active-recipe__button">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageView
