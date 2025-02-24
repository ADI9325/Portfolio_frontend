import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
// import arrow_icon  from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_img} alt="" />
              <div className="work-info">
                <p>{work.description}</p>
                <div className="work-buttons">
                  {/* <button className="btn view-btn">View</button> */}
                  <button
                    className="btn source-code-btn"
                    onClick={() => window.location.href = "https://github.com/ADI9325?tab=repositories"}
                  >
                    Source Code
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  )
}

export default MyWork
