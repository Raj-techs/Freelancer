import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { workersData } from '../data/works'

const History = () => {
  let fiveWorkers = workersData.slice(0,5);
  let total =299.4;
  let lists;

    let navData ={    
        name1:"Team",
        name2:"My Works"
      }
  return (
    <>
      <Nav data={navData}/>
      <div className='myworks-heading'>
        
        <p style={{padding:"10px"}}>History</p><br />
        </div>
        {fiveWorkers.map(data=>{return(<div className='user-card'>
                                


                                <div style={{ display: "flex" }}>
                                    <img src={data.img} width={45} height={45} alt="" style={{ borderRadius: "20px" }} />
                                    <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>{data.name}</h3>
                                </div>
                                <div style={{ display: "flex", gap: "20px", fontSize: 20 }}>
                                    <div><i class="fa-solid fa-phone"></i></div>
                                    <div><i class="fa-solid fa-envelope"></i></div>
                                </div>
                                <div>
                                    <h3>{data.work}</h3>
                                </div>
                                <div>
                                    completed
                                </div>
                                <div >
                                    {data.rating} /-
                                    
                                     
                                </div>
                                {/* <button className='details'><Link to={`/workerprofile/${data.id}`}>Details</Link></button> */}
                        </div>)})}
                        <div className="total-div">
                            <h2>Total Amount Gained    :</h2>
                            <h1>{total} /-</h1>
                        </div>
    </>
  )
}

export default History
