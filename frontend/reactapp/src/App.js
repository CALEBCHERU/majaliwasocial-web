
import './App.css';
import Home from './pages/home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import MyPage from './pages/mypage'
import Register from './pages/register'
import Logout from './pages/logout'
import NotFound from './pages/notfound'
import Feed from './components/feed.js';
import Chats from './pages/sidebarPages/chats.js';
import Videos from './pages/sidebarPages/videos.js';
import Gropus from './pages/sidebarPages/gropus.js';
import Bookmark from './pages/sidebarPages/bookmark.js';
import Questions from './pages/sidebarPages/questions.js';
import Jobs from './pages/sidebarPages/jobs.js';
import Events from './pages/sidebarPages/events.js';
import Courses from './pages/sidebarPages/courses.js';


function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />

          {/* SidePages */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/groups" element={<Gropus />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
