import '../styles/sidebar.css'
import polog from "../images/polog.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo,   faSuitcase,   faCalendarDays, faUserGraduate, faFeed } from '@fortawesome/free-solid-svg-icons';
// import {  Navigate } from "react-router-dom";

import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Sidebar() {
  const navigate = useNavigate();

  function handleMyPageClick() {
    navigate("/mypage");
    
  }

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.addEventListener('wheel', function(e) {
        e.stopPropagation();
      });
    }

    // Clean up the event listener on component unmount
    return () => {
      if (sidebar) {
        sidebar.removeEventListener('wheel', function(e) {
          e.stopPropagation();
        });
      }
    };
  }, []);



  return (
    <div className='col-3  ' id='sidebar'>
      
        <i className='d-flex'>
          < img src={polog} alt="polog" height="50px" className="rounded-5" />
          <div className='px-2' onClick={handleMyPageClick} >My Page</div>
        </i>
        <ab href="/feed"></ab>
        <a href="/feed"></a><i> <FontAwesomeIcon icon={faFeed}/> Feed</i>
        <a href="/"></a><i className="bi bi-chat-dots text-black"> Chats</i>
        <a href="/"></a><i> <FontAwesomeIcon icon={faVideo}/> Videos</i>
        <a href="/"></a><i className="bi bi-people-fill text-black"> Group</i>
        <a href="/"></a><i > <FontAwesomeIcon icon={faBookmark}/> Bookmark</i>
        <a href="/"></a><i className="bi bi-question-circle-fill text-black"> Questions</i>
        <a href="/"></a><i > <FontAwesomeIcon icon={faSuitcase}/> Jobs</i>
        <a href="/"></a><i > <FontAwesomeIcon icon={faCalendarDays}/> Events</i>
        <a href="/"></a><i > <FontAwesomeIcon icon={faUserGraduate}/> Courses</i>
        <button id="show" className='btn btn-primary mx-4 mt-3'>Show more</button>
        <hr className='mx-3'></hr>
        
        <div className='' id='profile'>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            
        </div>

    </div>
  )
}

export default Sidebar