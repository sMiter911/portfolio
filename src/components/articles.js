import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'


export default function Articles() {
  return (
    <div className="article-block">
      <div className="flex">
        <h2>Latest Articles</h2>
        <Link to="/blog" className="btn">view all</Link>
      </div>
      <ul className="article">
      <StaticQuery
              query={graphql`
                query {
                  allStrapiBlog(limit: 5) {
                    edges {
                      node {
                        strapiId
                        title
                        image{
                          publicURL
                          }
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiBlog.edges.map((article, i) => {
                  return (
                    <li key={article.node.strapiId} className="flex">
                      <Link to={`/article/${article.node.strapiId}`} style={{ textDecoration: 'none', color: 'black', display:'flex' }}>
                        <img width={30} height={30} src={article.node.image.publicURL} alt="blog_img"></img>
                        <p className="article-title">{article.node.title}</p>
                      </Link>
                      <hr></hr>
                    </li>
                  )
                })
              }></StaticQuery>
      <hr></hr>
      </ul>
      <button className="subscribe">Subscribe</button>
    </div>
  )
}
