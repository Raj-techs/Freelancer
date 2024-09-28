  import React from 'react'
import WorksCard from './WorksCard'

  const HomePoster = () => {
    return (
      <>
        <div className="homePoster">
          <div className="homePoster-mtr">
            <h1>Find the perfect freelance service  for your business</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim officia quis, veniam reprehenderit labore placeat! Officiis nisi cupiditate in ducimus tenetur harum consectetur sint quis repudiandae, expedita adipisci maxime.</p>
            <div className="input-outer">
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search for Works' style={{ border: "none" }} />
              </div>
              <p>choose category</p>
              <button className='search-btn'>Search</button>
            </div>
            <div className="avails">
              <div>
                <h2>743M</h2>
                <p>Users</p>
              </div>
              <div>
                <h2>13M</h2>
                <p>Projects</p>
              </div>
              <div>
                <h2>100M</h2>
                <p>Assignments</p>
              </div>
              <div>
                <h2>3M</h2>
                <p>Records</p>
              </div>
            </div>
          </div>
          <div className="homePoster-imgs">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="movers">
              <div className="m1">
              <i class="fa-regular fa-note-sticky"></i> Lorem, ipsum dolor.
              </div>
              <div className="m2">
              <i class="fa-regular fa-note-sticky"></i> Lorem, ipsum dolor.
              </div>
              <div className="m3">
              <i class="fa-regular fa-note-sticky"></i> Lorem, ipsum dolor.
              </div>
            </div>
          </div>
        </div>

        <div className="whiteColor">
          <WorksCard/>
        </div>
      </>
    )
  }

  export default HomePoster
