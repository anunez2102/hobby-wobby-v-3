import React from 'react';

const Favorites = ({favorites}) => {
    return (
        <div id=''>
        {
            favorites &&
            favorites.map(frame => (
                <div className='faveVideo' key={frame.id.snippet.title}>
                    {/* <div className='card-body'>
                        <h5 className='card-title'>{frame.title}</h5>
                        <p className="card-text">  {frame.id}</p>
                        <a href='#' className="btn btn-primary"> </a> */}
                    {/* </div> */}
                </div>
            ))
        }
    </div>
    );
}

export default Favorites;