import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import HomePg from './pages/HomePg'
import Profile from './pages/Profile'
import Avail from './pages/Avail'
import Login from './pages/Login'
import WorkerProfile from './pages/WorkerProfile'
import Addwork from './pages/Addwork'
import Myworks from './pages/Myworks'
import History from './pages/History'
import Notifications, { Provided, Requested } from './pages/Notifications'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePg/>}/>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/avail' element={<Avail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addwork' element={<Addwork/>}/>
          <Route path='/myworks' element={<Myworks/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/notifications' element={<Notifications/>}>
              <Route path='requested' element={<Requested/>}/>
              <Route path='provided' element={<Provided/>}/>
          </Route>
          <Route path='/workerprofile/:id' element={<WorkerProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
