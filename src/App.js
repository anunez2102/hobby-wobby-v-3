import React from "react";
import {Routes, Route} from 'react-router-dom'
import axios from "axios"
// import UserContext from "./contexts/UserContext"
import Youtube from "./Youtube";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import VideoPlayer from "./pages/VideoPlayer";
// import Materials from "./pages/Materials"

const App =() =>{
  // const [user, setUser] = useState()
  // const value = { user, setUser }

  return (
    <div className="App">
      {/* <UserContext.Provider value={value}/> */}
      {/* <div> */}
      {/* <Nav/> */}
      {/* <div className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='youtube' element={<Youtube />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='videoPlayer' element={<VideoPlayer />} />
        </Routes> */}
        <VideoPlayer/>
        {/* </div>*/}
        {/* <Youtube /> */}
        {/* </div>  */}
      {/* </div> */}
    </div>
  );
      }

  export default App
