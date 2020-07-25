import React from "react"
import Layout from "../components/layout"
import Tophalf from "../components/tophalf"
import Articles from "../components/articles"



export default function Home() {
  return (
    <Layout>
      <Tophalf></Tophalf>
      <Articles></Articles>
    </Layout>
  )
}
