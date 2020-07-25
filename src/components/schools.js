import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
query {
    allStrapiEducation(sort: {fields: strapiId, order: DESC}) {
        nodes {
          institution
          date
          certificate
          strapiId
        }
      }
  }
`


const Schools = () => {
    const data  = useStaticQuery(query)
    const {
        allStrapiEducation: { nodes: educations },
    } = data
    const [value, setValue] = React.useState(0)
    const { institution, date, certificate} = educations[value]

    return (
    <section className="section jobs">
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {educations.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.institution}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h2>{institution}</h2>
          <h4>{certificate}</h4>
          <p className="job-date">{date}</p>
        </article>
      </div>
    </section>
    )
}

export default Schools