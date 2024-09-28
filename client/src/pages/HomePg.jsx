import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import HomePoster from '../components/HomePoster'
import { useNavigate } from 'react-router-dom'

const HomePg = () => {
  let navData ={    
    name1:"Add work",
    name2:"My Works"
  }
  const navigate = useNavigate();

  return (
    <>
        <Nav data={navData} />
        <HomePoster/>
        <div className="bot">
        <abbr title="ChatBot"><i class="fa-solid fa-headset"></i></abbr>
        </div>
    </>
  )
}

export default HomePg
