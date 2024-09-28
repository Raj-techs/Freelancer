import React, { useEffect, useState, useSyncExternalStore } from 'react'
import {workersData} from '../data/works'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Avail = () => {
    const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/addwork');
        setWorks(response.data);
      } catch (error) {
        console.error('There was an error fetching the works!', error);
      }
    };

    fetchWorks();
  }, []);
    //don't touch
    const [available,setAvailable]=useState(workersData);
    const [searchText,setSearchText]=useState("")
    const filterWorks = filterWork(works,searchText)

    function filterWork(available,searchKey){
        console.log(available);
        return available.filter(p=>{
            return p.work.toLowerCase().includes(searchKey)
        })
    }
    //don't touch


    return (
        <>
            <div className="avail-container">
                <div className="avail-inner">
                    <div className="avail-head">
                        <button onClick={e=>setSearchText('assignment')}>Assignment</button>
                        <button onClick={e=>setSearchText('record')}>Record</button>
                        <button onClick={e=>setSearchText('notes')}>Notes</button>
                        <button onClick={e=>setSearchText('shots')}>Shots</button>
                        <button onClick={e=>setSearchText('webDev')}>WebDev</button>
                        <div className="outer-input">
                        <input type="text" style={{fontSize:"20px"}} onChange={(e)=>setSearchText(e.target.value)}/><i style={{fontSize:25,color:"black",marginTop:"6px"}} class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className='headings'>
                        <ul>
                            <li>Name</li>
                            <li>Contacts</li>
                            <li>Work</li>
                            <li>Closing_Time</li>
                            <li>Deadline</li>
                            <li>More</li>
                        </ul>
                    </div>
                    <div className="scroll-cards">
                    {
                    filterWorks ?  filterWorks.map(data => {
                            console.log(data);
                            return (

                            <div className='user-card'>
                                


                                    <div style={{ display: "flex" }}>
                                    <i class="fa-solid fa-user" style={{padding:"10px",fontSize:"1.3em"}}></i>
                                        <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>{data.username}</h3>
                                    </div>
                                    <div style={{ display: "flex", gap: "20px", fontSize: 20 }}>
                                        <div><i class="fa-solid fa-phone"></i></div>
                                        <div><i class="fa-solid fa-envelope"></i></div>
                                    </div>
                                    <div>
                                        <h3>{data.work}</h3>
                                    </div>
                                    <div>
                                        {data.closes}
                                    </div>
                                    <div>
                                        {data.deadline}
                                    </div>
                                    <button className='details'><Link to={`/workerprofile/${data.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
                            </div>)
                        }):<div className='filter-not-found'></div>
                    }
                                </div>

                </div>
            </div>
        </>
    )
}

export default Avail
