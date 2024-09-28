import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({data}) => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img width={100} src="https://e7.pngegg.com/pngimages/328/113/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text.png" alt="" />
                </div>
                <div className="opts">
                    <ul>
                    <Link  to='/home'><li>Home</li></Link>
                        <li>About</li>
                        
                        <Link to='/addwork'><li>{data.name1}</li></Link>
                        <Link to='/avail'><li>Avail</li></Link>
                        <Link to='/myworks'><li>My works</li></Link>
                        <Link to='/history'><li>History</li></Link>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="more">
                    {/* <i  className="fa-solid fa-magnifying-glass"></i> */}
                <Link to='/profile'><i class="fa-solid fa-user" style={{padding:"9px",color:"white",marginRight:"10px",fontSize:"1.3em"}}></i></Link>

                    <Link to='/notifications'><i style={{marginTop:"1px",color:"white",fontSize:"2em",position:"absolute",right:"12%"}} class="material-symbols-outlined">
notifications
</i></Link>
                    {/* {data.name2 == "My Works" ? <Link to='/myworks'><button>{data.name2}</button> </Link>: null} */}
                    <Link to='/'><button onClick={localStorage.removeItem('token')}>SignOut</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Nav
