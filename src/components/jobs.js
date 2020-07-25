import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
query {
    allStrapiJob(sort: {fields: strapiId, order: DESC}) {
        nodes {
          company
          date
          description
          strapiId
          position
          job_details {
            details
            id
          }
        }
      }
  }
`


const Jobs = () => {
    const data  = useStaticQuery(query)
    const {
        allStrapiJob: { nodes: jobs },
    } = data
    const [value, setValue] = React.useState(0)
    const { company, position, date, description, job_details} = jobs[value]

    return (
    <section className="section jobs">
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h2>{position}</h2>
          <h4>{company}</h4>
          <p className="job-desc-long">{description}</p>
          <p className="job-date">{date}</p>
          {job_details.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="job-icon"></FontAwesomeIcon>
                <p>{item.details}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
    )
}

export default Jobs