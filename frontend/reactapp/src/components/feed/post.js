import '../../styles/post.css'
import polog from "../../images/polog.jpg"
import ny from '../../images/ny.jpg'

import React, { useState } from  "react";

function Post() {
    const [like, setlike] = useState(null);
    const [laugh, setlaugh] = useState(null);

    const [likecount, setlikecount] = useState(5);
    const [laughcount, setlaughcount] = useState(10);

    function likefunc(){
        if (like === true) {
            setlike(false)
            setlikecount(likecount+1)
            
        } else {
            setlike(true)
            setlikecount(likecount-1)
        }
        
    }

    function laughfunc(){
        if (laugh === true) {
            setlaugh(false)
            setlaughcount(laughcount+1)
            
        } else {
            setlaugh(true)
            setlaughcount(laughcount-1)
        }
        
    }
  return (
    <div>
        <div className='card shadow-lg m-4 ' id='post'>
            <div className='d-flex m-2 ' id='post'>
                <div>
                    <img
                        src={polog}
                        alt="polog"
                        height="50px"
                        className="rounded-5 px-1"
                    />
                </div>
                
                
                <div id='name' className='px-2'>
                    Polo G
                </div>
                <div id='lastseen' className='px-2 align-bottom'>
                    5 min ago
                </div>

            </div>
            <div className='px-2 '>
                <p>Hey it's my first post</p>
            </div>
            <div className=''> 
                <img src={ny}  alt="" id='imagepost'/>
            </div>
            <div className=''>
                <div>
                    <i id ='posticontext' class={like ? "bi bi-hand-thumbs-up text-danger mx-2" : "bi bi-hand-thumbs-up-fill text-danger mx-2"}  onClick={likefunc}  aria-hidden="true"><span id ='posticontext1'>{likecount}</span> </i>
                    <i id ='posticontext' class={laugh ? "bi bi-emoji-laughing text-danger mx-2" : "bi bi-emoji-laughing-fill text-danger mx-2"}  onClick={laughfunc}  aria-hidden="true"><span id ='posticontext1'>{laughcount}</span> </i>

                </div>
                <div className='end-50 ' id='comments'>
                    <h4>comments</h4>
                    
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Post