 import '../styles/rightbar.css'
import cool from '../images/bandmember.jpg'
import polog from "../images/polog.jpg"
 


 export default function Rightbar() {
   return (
    <div className='col-3' id='rightbar'>
      <div className='d-flex p-1 '>
        <i className="bi bi-gift-fill  text-danger p-1"  id='gift'> </i>
        <p>Caleb and five others have their bithday today</p>
      </div>
      <img src={cool} alt="" />
      
      <div className=' card mt-3 p-3'>
        <h4 className=''>Online</h4>
        <div className='d-flex '>
          <div>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            <div id='online'></div>
          </div>
            <p className='px-2 ' id='nameonline'>polo G</p> 

        </div>
        <div className='d-flex '>
          <div>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            <div id='online'></div>
          </div>
            <p className='px-2 ' id='nameonline'>polo G</p> 

        </div>
        <div className='d-flex '>
          <div>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            <div id='online'></div>
          </div>
            <p className='px-2 ' id='nameonline'>polo G</p> 

        </div>
        <div className='d-flex '>
          <div>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            <div id='online'></div>
          </div>
            <p className='px-2 ' id='nameonline'>polo G</p> 

        </div>
        <div className='d-flex '>
          <div>
            < img src={polog} alt="polog" height="50px" className="rounded-5" />
            <div id='online'></div>
          </div>
            <p className='px-2 ' id='nameonline'>polo G</p> 

        </div>

      </div>
      

    </div>
   )
 }
 