import React, { Component } from 'react';

const API = 'AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ';
const playlistId = 'PLYwi9QXsi-wxBatNFolTGD5nWDx2IWgrM'
const result = 10
const finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`

//https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ&playlistId=PLYwi9QXsi-wxBatNFolTGD5nWDx2IWgrM&part=snippet,id&order=date&maxResults=10

//Search Overview
//breaking down api request: https://www.googleapis.com/youtube/v3/search?key=AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ&channelId=UCSQzo6K4ao4FqswtWAzvO9w&part=snippet,id&order=date&maxResults=10
//https://www.googleapis.com/youtube/v3/search
//?key=
//&channelId=UCSQzo6K4ao4FqswtWAzvO9w
//&part=snippet,id
//&order=date
//&maxResults=10

//playlists
//hobbywobby playlist id: PLYwi9QXsi-wxBatNFolTGD5nWDx2IWgrM
//https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ&channelId=UCSQzo6K4ao4FqswtWAzvO9w&part=snippet,id&order=date&maxResults=10

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        fetch(finalURL)
            .then((response) => response.json()) //promise
            .then((responseJson) => {
                //console.log(responseJson)
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId);
                //loops through items
                //obj.snippet.title); 
                this.setState({ resultyt });

            })
            .catch((error) => {
                console.error(error);
            });
        //test#1 >>console reads clicked when Hobby Search button is clicked
        //console.log('clicked');
    }
    render() {
        //console.log(finalURL) link appeared in console
        console.log(this.state.resultyt)
        return (
            <div>
                <button onClick={this.clicked}>Hobby Search</button>
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        const frame = <div key={i} className="youtube"><iframe 
                            width="560" height="315"
                            src={link} title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe></div>
                        return frame;
                    })
                }
                {this.frame}


            </div>
        );
    }
}

export default Youtube;
