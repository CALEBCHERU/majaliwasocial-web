import React from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import backgroundProfilePic from '../images/ny.jpg'
import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'
import Rightbar from '../components/rightbar'
import '../styles/mypage.css'
import polog from "../images/polog.jpg"



function MyPage() {
  return (
    <div className='flex-shrink-1' >
        <Topbar/>
        <div id='home' className='d-flex'>
          <Sidebar/>
          {/* MYPAGE ***STARTS**/}
          <div className='col-6 ' id='mypage'>
            <div className='mx-3 card   row-cols-1' id='card' >
              <img className=" pic "id='image' src={backgroundProfilePic} alt="" >
              </img>
              <div className="d-block "  id='profilebg'>
                < img src={polog} alt="polog" height='100px' className="rounded-5 "  />
                <div className="px-4 text-primary" style={{fontSize: "26px", fontWeight: "bold"}}>Polo G</div> 
                
              </div>
            </div>
            
          </div>
          {/* MYPAGE ***ENDS**/}
          <Rightbar/>
        </div>
       
    </div>
  )
}

export default MyPage