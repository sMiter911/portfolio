import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: String!) {
    strapiBlog(strapiId: { eq: $id }) {
      strapiId
      title
      content
      updatedAt
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiBlog
  return (
    <Layout>
      <div className="main-article-holder">
        <div
          id="banner"
          className="article-title"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="article-holder">
          <div className="article-container">
            <ReactMarkdown source={article.content} />
            <p className="article-date">
              Published: <Moment format="MMM Do YYYY">{article.updatedAt}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article