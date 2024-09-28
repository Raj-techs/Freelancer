import React, { useEffect, useState } from 'react'
import { workersData } from '../data/works'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const WorkerProfile = () => {
    // const [chatting, setChatting] = useState(false);
    // const [payment, setPayment] = useState(true)
    // let { id } = useParams();
    // let Worker = workersData.find(details => details.id === parseInt(id));
    // let navData={
    //     name1:"Team"
    // }

    const [worker, setWorker] = useState(null);
    const [chatting, setChatting] = useState(false);
    const [payment, setPayment] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/addwork/${id}`);
                setWorker(response.data);
            } catch (error) {
                console.error('There was an error fetching the worker data!', error);
            }
        };

        fetchWorker();
    }, [id]);



    if (!worker) {
        return <div>Loading...</div>;
    }

    let navData = {
        name1: "Team"
    };

    const handleConfirm = async () => {
        const email = localStorage.getItem('email'); // Replace with your actual key for username

        const requestData = {
            workerName: worker.username,
            workerId: worker.id,
            myemail: email,
            liked: worker.liked,
            year: worker.year,
            rating: worker.rating,
            work: worker.work,
            description: worker.description,
            closes: worker.closes,
            deadline: worker.deadline,
            amount: worker.amount,
            workerEmail:worker.email
        };

        try {
            await axios.post('http://localhost:3000/requested', requestData);
            alert(`Work Confirmed with ${worker.name}`);
            await axios.post('http://localhost:3000/providedbyme', requestData);
            // alert('Details posted to providedbyme API');
        } catch (error) {
            console.error('There was an error posting the request!', error);
        }
    };
    return (
        <>
            <Nav data={navData}/>
            <div className="worker-profile">
                <div className="worker-img">
                <i class="fa-solid fa-user" style={{padding:"10px",fontSize:"11em"}}></i>

                    <h1> {worker.username}</h1>
                    <p> {worker.email}</p>
                    <p>{worker.liked} Liked</p>
                    <p>Year : {worker.year}</p>
                    <div className="worker-socialIcons" style={{ fontSize: "30px" }}>
                        <span><i class="fa-solid fa-location-dot" style={{ color: "green" }}></i> </span>
                        <span><i class="fa-brands fa-facebook" style={{ color: "blue" }}></i> </span>
                        <span><i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i> </span>
                        <span><i class="fa-brands fa-twitter" style={{ color: "cyan" }}></i> </span>
                    </div>
                    <div className='rating'>
                        <span style={{ fontSize: "3em" }}>{worker.rating}</span>
                        <div>
                            <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                            <p>104 views</p>
                        </div>
                    </div>
                </div>

                <div className="worker-work">
                    <div>
                        <h2>Work</h2>
                        <input type="text" value={worker.work} />
                    </div>
                    <div>
                        <h2>References</h2>
                        <span style={{ display: 'flex', gap: 20 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                        </span>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p style={{height:"100px"}}>{worker.description}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 50 }}>
                        <span><h3>Closes : {worker.closes}</h3></span>
                        <span><h3>DeadLine : {worker.deadline} </h3></span>
                    </div>
                    <div>
                        <h2>Amount : {worker.amount}</h2>
                        <p>Amount will be sent within 24 hrs (within One day) to your account balance</p>
                    </div>
                    <div>
                        <h2><i class="fa-regular fa-clock"></i> : 72:12:00 sec</h2>
                    </div>

                    <center><button className='confirm-btn' onClick={handleConfirm}>Confirm</button></center>
                </div>
                <div className="worker-cAp">
                    <div className="worker-cAp-header">
                        <div onClick={() => { setChatting(true); setPayment(false) }}>Chatting</div>
                        <div onClick={() => { setPayment(true); setChatting(false) }}>Payment</div>
                    </div>
                    {chatting ? <ChattingDiv data={worker}/> : <PaymentDiv data={worker} />}
                </div>
            </div>
        </>
    )
}

const ChattingDiv = (props) => {
    const [chatdata,setChatdata]=useState([
        {id:1,chat:"hello worker"},
        {id:2,chat:"hello customer"},
        {id:3,chat:"i will do the work"},
    ])
    const [msg,setMsg]=useState("")

   

    return (
        <>
            <div className="scroll-msg-space">
                <div className="msg-space">
                    <div style={{ color: 'black', display: "flex", flexDirection: "column", gap: 50, justifyContent: "space-between" }}>
                        {chatdata.map(items=>{
                            return(<h4>{items.chat}</h4>)
                        })}
                    </div>
                </div>
            </div>
            <div className="msg-inputs">
                <input type="text" placeholder='Message' onChange={e=>setMsg(e.target.value)} />
                <i  style={{ fontSize: "1.3em", padding: "13px", borderRadius: '20px', backgroundColor: "blue" }} class="fa-regular fa-paper-plane"></i>
            </div>
        </>
    )
}

const PaymentDiv = (props) => {
    let { id } = useParams();
    console.log(props);
    // let Worker = workersData.find(details => details.id === parseInt(id));
    return (
        <>
            <div className="paymentdiv">
                {/* <center><h2 className="payment-heading">{props.data.worker.username}</h2></center> */}
                <div className="payment-img"></div>
                {/* <center className="payment-upi">UPI ID :{props.data.worker.username}@okaxis</center> */}
            </div>
        </>
    )
}
export default WorkerProfile
