import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Route } from 'react-router-dom'
import axios from 'axios';

import Youtube from "../Youtube";
import Home from "./Home";
import logo from '../images/logo.png'
// import {videoId} from "../Youtube"



const VideoPlayer = () => {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  // if (!videoId) {
  //   return (
  //     <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
  //       Search for your new hobby!
  //     </p>
  //   );
  // }
  //   return (
  //     <div className="video-player">
  //       <iframe
  //         title={videoId}
  //         className="video-iframe"
  //         src={`https://www.youtube.com/embed/${videoId}`} />
  //     </div>
  //   );
  // }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setLoading(true)

    //axios/fetch will return a Promise => response
    axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ&playlistId=PLYwi9QXsi-wxBatNFolTGD5nWDx2IWgrM&part=snippet,id&order=date${query}`)
      .then(response => {
        setItems(response.items.snippet.title)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <img src={logo} alt="logo" height={200} width={200}/>
      <h2>Enter your desired hobby search by starting the search with 'How to'</h2>
      {/* CONTROLLED FORM - meaning handle our change via state */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='query'>Search: </label>
        <input
          name='query'
          type='text'
          id='query'
          placeholder="how to..."
          aria-label="search"
          size="30"
          onChange={handleChange}
          value={query}
        />
        <input type="submit" value='submit'/>
      </form>

      {/* <button onClick={toggle}>{like}</button> */}

      {/* {
        loading
          ?
          <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="" />
          :
          <div id='youtube-container'>
            {
              items.map((items) => {
                return (
                  <Youtube
                    key={items.snippet[0].title}
                    items={items} />
                )
              })
            } */}
           
            {/* //search bar, need to add API info - I had this under my return to see something on screen */}
{/* // <div id='buttons'>
//         <p>
//           <label>Enter your desired hobby search by starting the search with 'How to'
//             <input name="query" type="text" pattern="How to" placeholder="how to..." aria-label="search" size="8" />
//             <button id="search-button" onclick={getHobby}>Search</button>
//           </label>
//         </p>
//       </div> */}

          </div>
      // }
  //     <div>
  //   <Route>
  //     <ul>
  //       <li><Link to="./Home"/>Home</li>
  //       <li><Link to="./Youtube"/>Youtube</li>
  //     </ul>
  //   </Route>
  // </div>
    // </div>
  );


}

export default VideoPlayer;