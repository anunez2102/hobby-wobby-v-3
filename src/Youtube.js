import React, { Component } from 'react';

const API = 'AIzaSyBo8jUQq40ADaLaobk9cje2k82iJKX2dNQ';
const channelId = 'UCSQzo6K4ao4FqswtWAzvO9w'

//these videos are embedded into app

//Search Overview
//breaking down api request: https://developers.google.com/youtube/v3/docs/search
//?key=
//&channelId=UCSQzo6K4ao4FqswtWAzvO9w
//or playlist????? playlist?list=PLYwi9QXsi-wxBatNFolTGD5nWDx2IWgrM <mine>
//&part=snippet,id
//&order=date
//&maxResults=10


class Youtube extends Component {
    render() {
        return (
            <div className="youtube">
                <button>Hobby Search</button>
                <iframe 
                    width="560" height="315" 
                    src="https://www.youtube.com/embed/S9U_GcfPIFQ" title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Youtube;
