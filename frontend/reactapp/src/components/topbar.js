/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/topbar.css";
// import {Person} from "@mui/icons-material/Person"

import polog from "../images/polog.jpg"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
  return (
    
    <div className="topbarContainer" >
      <nav className="navbar navbar-expand-md bg-primary navbar-dark  justify-content-around ">
        <div>
          <h3><a className="nav-link text-white" href="/">MajaliwaSocial</a></h3>
          
        </div>
        
        <div>
          <form class="d-flex">
            <div class="px-2" >
              <i className="bi bi-search text-black fs-2"></i>
            </div>
            <input class="form-control me-2 col-12 flex-shrink-1" type="text" placeholder="Search" />
            
          </form>
        </div>

        
        
        
        <div className="d-flex align-items-center">
          <div className="d-flex" id="topbaricon">
            <div className="position-relative me-3">
              <i className="bi bi-person-fill text-white"></i>
              <span id="num"  className="position-absolute  translate-middle badge rounded-pill bg-danger">
                1
              </span>
            </div>
            <div className="position-relative me-3">
              <i className="bi bi-chat-dots text-white"></i>
              <span id="num" className="position-absolute   translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </div>
            <div className="position-relative">
              <i className="bi bi-bell text-white"></i>
              <span id="num"  className="position-absolute  translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </div>
          </div>
        </div>
        
        <div className="d-flex " >
          <div className="px-4" style={{fontSize: "26px", fontWeight: "bold"}}>Polo G</div> 
          < img src={polog} alt="polog" height="50px" className="rounded-5 "  />
        </div>
        <div>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Account info</a>
            <ul class="dropdown-menu bg-dark text-primary w-100 fs-4 flex-shrink-1">
              <li><a class="dropdown-item text-primary" href="#"> 
                <i class="bi bi-person-fill px-1   "></i>
                <span class=" px-1 ">Account</span>
                
              </a></li>
              <li><a class="dropdown-item text-primary" href="#">Settings</a></li>
              <li><a class="dropdown-item text-primary" href="#">Subsription</a></li>
              <li><a class="dropdown-item text-primary" href="#">Help & Support</a></li>
              {/* <i> <FontAwesomeIcon icon={faPerson}/> Feed</i>
              <i class="bi bi-sub px-1   "></i> */}
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
