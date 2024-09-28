import React from 'react'
import { Link } from 'react-router-dom'

const WorksCard = () => {
    return (
        <>
            <div className="worksCard-container">
                <div className="firstDiv">
                    <div>
                        <i class="fa-regular fa-clipboard"></i>
                        <h1>Assignments</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo ullam, quasi aliquid quis laborum nisi, rem optio corporis dolores, eaque, aspernatur vel voluptatibus.</p>
                        <Link to='/avail'><button>Works</button></Link>
                    </div>
                    <div>
                        <i class="fa-solid fa-book"></i>
                        <h1>Records</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo ullam, quasi aliquid quis laborum nisi, rem optio corporis dolores, eaque, aspernatur vel voluptatibus.</p>
                        <Link to='/avail'><button>Works</button></Link>
                    </div>
                    <div>
                        <i class="fa-regular fa-note-sticky"></i>
                        <h1>Notes</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo ullam, quasi aliquid quis laborum nisi, rem optio corporis dolores, eaque, aspernatur vel voluptatibus.</p>
                        <Link to='/avail'><button>Works</button></Link>
                    </div>
                </div>
                <div className="secondDiv">
                <div>
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        <h1>Exchange Books</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo ullam, quasi aliquid quis laborum nisi, rem optio corporis dolores, eaque, aspernatur vel voluptatibus.</p>
                        <button>Works</button>
                    </div>
                    <div style={{width:"70%",margin:"20px",height:275}}>
                    <i class="fa-solid fa-question"></i>
                        <h1>Discuss Queries About Subjects</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo ullam, quasi aliquid quis laborum nisi, rem optio corporis dolores, eaque, aspernatur vel voluptatibus.</p>
                        <Link><button>Works</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksCard
