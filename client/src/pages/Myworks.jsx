import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { workersData } from '../data/works'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Myworks = () => {
  const [confirmedData, setConfirmedData] = useState([]);
  const email = localStorage.getItem('email'); // Retrieve email from localStorage


  useEffect(() => {
    const fetchConfirmedData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/confirmed');
        const filteredData = response.data.filter(item => item.myemail === email);
        setConfirmedData(filteredData);
      } catch (error) {
        console.error('Error fetching conf1irmed data:', error);
      }
    };

    fetchConfirmedData();
  }, [email]);
  console.log(confirmedData);
  return (
    <>
      <div className='myworks-heading'>
        <Link to='/home'><span class="material-symbols-outlined" style={{fontSize:"50px",marginTop:"18px"}}>
          arrow_back
        </span></Link>
        <p>My works </p><span className='workcount'>{confirmedData.length}</span>
      </div>
      <div className="myworks-container">
        {confirmedData.map(items=>{
          return(<div className="mywork-cards">
                              <i class="fa-solid fa-user" style={{ padding: "9px", fontSize: "2.9em" }}></i>

          <h3>{items.workerName}</h3>
          <div style={{ display: "flex", gap: "20px", fontSize: 20 }}>
                                        <div><i class="fa-solid fa-phone"></i></div>
                                        <div><i class="fa-solid fa-envelope"></i></div>
                                    </div>
          <h2> {items.work}</h2>
          <p> DeadLine - {items.deadline}</p>
          <Link to={`/workerprofile/${items.id}`}>See More</Link>
        </div>)
        })}
        
       
      </div>
      <div>
        <div className="mywork-cards">
          <h2>{}</h2>
        </div>
      </div>
    </>
  )
}

export default Myworks
