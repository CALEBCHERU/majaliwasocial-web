import '../../styles/share.css'

import polog from "../../images/polog.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';



function Share() {
  return (
    <div>
      <div className="card m-3 shadow-lg " id="share">
        <div className="card-body  ">
          <div className="d-flex m-3 ">
            <div className="card-img ">
              <img
                src={polog}
                alt="polog"
                height="50px"
                className="rounded-5"
              />
            </div>
            <input
              className=" col-11  bg-white border-0 mx-2 focus-ring-danger"
              
              placeholder="What's on your mind?" id='mind'
            ></input>
          </div>
        </div>

        <div className=" card-footer bg-white border-top-0  " id='shareicons'>
          <i class="bi bi-tag-fill text-danger mx-2" aria-hidden="true"><span className='icontext' >Tag</span> </i>
          <i class="bi bi-folder-fill text-danger mx-2" aria-hidden="true"><span className='icontext'>videos or photos</span> </i>
          <i > <FontAwesomeIcon icon={faLocationDot} style={{color: "red"}}/> <span className='icontext'>location</span> </i>
          <i class="bi bi-emoji-smile-fill  mx-2 " id='emoji' aria-hidden="true"><span className='icontext'>Fellings</span> </i>
          <i style={{color: "black", fontWeight : 'bolder'}} className=' ' id='sharebtn'> <FontAwesomeIcon icon={faShare} style={{color: "black"}}/> Share</i>
        </div>
      </div>
    </div>
  );
}

export default Share