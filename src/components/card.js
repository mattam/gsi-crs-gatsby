import React from "react"
import { Link } from "gatsby"

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={`https://img.youtube.com/vi/${article.node.YoutubeID}/maxresdefault.jpg`}
            alt="test"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
