
import Topbar from '../components/topbar';
import '../styles/home.css'
import Sidebar from '../components/sidebar.js';
import Feed from '../components/feed.js';
import Rightbar from '../components/rightbar.js';

function Home() {
  return (
    <div className='flex-shrink-1' >
        <Topbar/>
        <div id='home' className='d-flex'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
       
    </div>
  );
}

export default Home;