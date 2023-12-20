import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='CONCERTS' subtitle='Large-scale concerts this year' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
