import React from "react"
import Sidebar from "../components/sidebar"
import { Link, StaticQuery } from 'gatsby'

export default function Blog() {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="main">
        <div className="blog-holder">
          <div className="blog-controls">
            <h1>Articles</h1>
            <div className="tags">
              <button>All Tags</button>
            </div>
          </div>
          <div className="blog-array">
            <ul>
                <StaticQuery 
                query={graphql`
                query {
                    allStrapiBlog {
                      edges{
                        node {
                          strapiId
                          id
                          date
                          title
                          description
                          cartegory {
                            name
                          }
                        }
                      }
                    }
                }
              `}
              render={data =>
                data.allStrapiBlog.edges.map((category, i) => {
                  return (
                    <li key={category.node.id} className="flex blog-post">
                      <Link to={`/article/${category.node.strapiId}`} style={{textDecoration: 'none', color: 'grey', fontSize: '12px'}}>{category.node.cartegory.name}</Link>
                      <Link to={`/article/${category.node.strapiId}`} style={{textDecoration: 'none', color: 'black'}}>
                        <h6>{category.node.date}</h6>
                        <h2>{category.node.title}</h2>
                        <p className="article-title">{category.node.description}</p>
                      </Link>
                    </li>
                  )
                })}></StaticQuery>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
