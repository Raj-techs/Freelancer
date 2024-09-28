import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Notifications = () => {
    // const [works, setWorks] = useState([]);

    // useEffect(() => {
    //   const fetchWorks = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:3000/addwork');
    //       setWorks(response.data);
    //     } catch (error) {
    //       console.error('There was an error fetching the works!', error);
    //     }
    //   };

    //   fetchWorks();
    // }, []);
    const username = localStorage.getItem('username')
    return (
        <>
            <div className="notify">
                <div className="notify-side"><Link to='/home'><i class="fa-solid fa-arrow-left" style={{ position: "relative", top: "-250px", fontSize: "3em", color: 'lightgreen' }}></i></Link><i class="fa-regular fa-bell fa-bounce" style={{ fontSize: "6em", color: "white" }}></i></div>
                <div className="notify-content">
                    <div className="notify-content-head">
                        <div><Link to='requested'><button className='notify-btns '>Requested</button></Link>
                            <Link to='provided'><button className='notify-btns'>Provided</button></Link></div>
                        <div style={{ marginRight: "30px" }}>
                            <h2> <i class="fa-regular fa-user" style={{ marginRight: "10px" }}></i> {username}</h2>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export const Requested = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:3000/requested');
                const email = localStorage.getItem('email'); // Replace with your actual key for email
                const filteredRequests = response.data.filter(request => request.myemail === email);
                setRequests(filteredRequests);
            } catch (error) {
                setError('There was an error fetching the requested data!');
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <>
            <div className="requested">
                {requests.length > 0 ? (
        requests.map(request => (
            <div key={request.id}  className='user-card' style={{ width: "60%" }}>



                        <div style={{ display: "flex" }}>
                            <i class="fa-solid fa-user" style={{ padding: "9px", fontSize: "1.3em" }}></i>
                            <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>{request.workerName}</h3>
                        </div>
                        <div style={{ display: "flex", gap: "20px", fontSize: 20 }}>
                            <div style={{ fontWeight: "bolder", fontSize: ".9em", color: "#599f59" }}>Status</div>
                        </div>
                        <div>
                            <h3>{request.work}</h3>
                        </div>
                        <div>
                            {request.closes}
                        </div>
                        <div>
                            {request.deadline}
                        </div>
                        <button className='details'><Link to={`/workerprofile/${request.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
                    </div>
        ))
    ) : (
        <p>No requests found for your account.</p>
    )}
            </div>
        </>
    )
}
export const Provided = () => {
    const [providedData, setProvidedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProvidedData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/providedbyme');
                const email = localStorage.getItem('email'); // Replace with your actual key for email
                const filteredData = response.data.filter(item => item.workerEmail === email);
                setProvidedData(filteredData);
            } catch (error) {
                setError('There was an error fetching the provided data!');
            } finally {
                setLoading(false);
            }
        };

        fetchProvidedData();
    }, []);
    const SubmitHandler = async (item) => {
        try {
            const email = localStorage.getItem('email');
            const dataToPost = {
                ...item,
                userEmail: email,
            };
            await axios.post('http://localhost:3000/confirmed', dataToPost);
            alert('Data confirmed successfully!');
        } catch (error) {
            alert('There was an error confirming the data!');
        }
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    console.log(providedData);
    return (
        <>
        {providedData.length > 0 ? (
                providedData.map(item => (
            <div key={item.id} className="provided">
                <div className='user-card' style={{ width: "66%" }}>



                    <div style={{ display: "flex" }}>
                    <i class="fa-solid fa-user" style={{ padding: "9px", fontSize: "1.3em" }}></i>

                        <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>{item.myemail}</h3>
                    </div>
                    Requested {item.work} for {item.amount} /- at


                    <div>
                        {item.deadline}
                    </div>

                    <button className='details' onClick={() => SubmitHandler(item)}><Link style={{ color: "white", textDecoration: "none" }}>Confirm</Link></button>
                    <button className='details'><Link style={{ color: "white", textDecoration: "none" }}>Decline</Link></button>
                </div>
            </div>))
             ) : (
                <p>No provided data found for your account.</p>
            )}
        </>
    )
}
export default Notifications
