import '../styles/feed.css'
import Share from './feed/share.js'
import Post from './feed/post.js'


export default function Feed() {
  return (
    <div className='col-6' id="feed">
        < Share/>
        < Post/>
        < Post/>
        < Post/>
    </div>
  )
}
