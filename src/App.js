import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
// import axios from "axios"
// // import UserContext from "./contexts/UserContext"
// import Youtube from "./Youtube";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import VideoPlayer from "./pages/VideoPlayer";
import Youtube from "./Youtube";
import Materials from "./pages/Materials"

function App() {
  // const [user, setUser] = useState()
  // const value = { user, setUser }

  return (
  <Router>
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" component={Home}/>
      <Route path="./Youtube" component={Youtube}/>
      <Route path="./pages/VideoPlayer" component={VideoPlayer}/>
      </Routes>
    </div>
  </Router>
  );
}

const home = () =>(
  <div>
    <h1> Home Page</h1>
  </div>
)
  // <VideoPlayer/>

  


export default App
