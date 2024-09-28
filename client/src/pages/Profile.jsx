import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
    const userEmail = localStorage.getItem('email'); // Get the stored user email from localStorage

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                const users = response.data;
                const loggedInUser = users.find(user => user.email === userEmail);
                setUser(loggedInUser);
            } catch (error) {
                console.error('There was an error fetching the user data!', error);
            }
        };

        fetchUser();
    }, [userEmail]);

    if (!user) {
        return <div>Loading...</div>;
    }
    console.log(user);

  let navData ={    
    name1:"Add work",
    name2:"My Works"
  }
  return (
    <>
      <Nav data={navData}/>
      <div className="profile-container">
        <img src="https://t3.ftcdn.net/jpg/06/24/52/34/360_F_624523450_NbFfAibNsbxFDjGKueOukV4ijNGFIuQ1.jpg" width={"100%"} height={300} alt="" />
        <div className="prof">
            <img src="https://i.insider.com/64c7a2c9048ff200190deaf5?width=800&format=jpeg&auto=webp"  alt="" />
            <div className="content">
                <h1>{user.username}</h1>
                <p>Advisor and Consultant at Strips Inc.</p>
                <div className="worker-socialIcons" style={{ fontSize: "30px" }}>
                        <span><i class="fa-solid fa-location-dot" style={{ color: "green" }}></i><span style={{fontSize:18}}>Location</span> </span>
                        <span><i class="fa-brands fa-facebook" style={{ color: "blue" }}></i> <span style={{fontSize:18}}>Facebook</span> </span>
                        <span><i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i><span style={{fontSize:18}}>LinkedIn</span>  </span>
                        <span><i class="fa-brands fa-twitter" style={{ color: "cyan" }}></i> <span style={{fontSize:18}}>Twitter</span> </span>
                    </div>
            </div>
            <i class="fa-solid fa-pen-to-square edit-option"></i>
        </div>
        <div className="boxs">
            <div className="div1">
                <div>
                <i class="fa-solid fa-phone"></i> +91 {user.mobile} (Official) <br /> +91 {user.whatsappNo}
                </div>

                <div>
                <i class="fa-solid fa-envelope" style={{marginRight:"5px"}}></i>{user.email}
                </div>
                <button><i class="fa-regular fa-comment"></i> Share</button>

                <div className='rating'>
                    <span style={{fontSize:"3em"}}>4.5</span>
                    <div>
                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                        <p>104 views</p>
                    </div>
                </div>
            </div>
            <div className="div2">
              <h2>SKILLS</h2>
              <ul>
                <li>HTML</li>
                <li>PHOTOSHOP</li>
                <li>UI/UX</li>
                <li>FRONTEND DEV</li>
                <li>PYTHON</li>
              </ul>
              <button> <i class="fa-solid fa-plus"> ADD SKILL</i></button>
            </div>
            <div className="div3">
              <h1>Add Works</h1>
              
              <Link to='/addwork'><button> <i class="fa-solid fa-plus"> ADD</i></button></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
