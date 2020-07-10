import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import ReactPlayer from "react-player";

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      YoutubeID
    }
  }
`

const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
const YOUTUBE_LANGUAGE_SETTINGS =
  "?hl=es&amp;cc_lang_pref=es&amp;cc_load_policy=1";

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <h1>{article.title}</h1>
        { article.YoutubeID &&
                <ReactPlayer
                url={`${YOUTUBE_URL}${article.YoutubeID}${YOUTUBE_LANGUAGE_SETTINGS}`}
                width="100%"
                height="700px"
                controls
              />
            }
        <div className="uk-section">
          <div className="uk-container uk-container-small">

            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
