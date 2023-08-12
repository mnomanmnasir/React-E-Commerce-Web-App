import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa fa-arrows-alt'></i>
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right row'>
              <span style={{color: '#15CED1'}}>View all</span>
              <i className='fa fa-arrow-right'></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
