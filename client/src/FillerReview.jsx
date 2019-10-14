import React from 'react';

const FillerReview = (props) => {
    return(
      <div className="filler-body">

        <div className="filler-image">
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png"/>
        </div>

        <div className="filler-reviewform">

          <div className="filler-background">

            <div className="filler-stars-container">
              <div className='one'> 
                <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" />
                <span className="tooltiptext">Eek! Methinks not.</span>
              </div>
              <div className='two'> 
                <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" />
                <span className="tooltiptext">Meh. I've experienced better.</span>
              </div>
              <div className='three'> 
                <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" />
                <span className="tooltiptext">A-OK.</span>
              </div>
              <div className='four'> 
                <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" />
                <span className="tooltiptext">Yay! I'm a fan.</span>
              </div>
              <div className='five'> 
                <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png"/>
                <span className="tooltiptext">Woohoo! As good as it gets!</span>
              </div>  
            </div>
          </div>

          <div className="filler-initiate">
            <a className="filler-initiate-text">Start your review of <strong>{props.restaurant}</strong></a>
          </div>

        </div>

      </div>
    )
}

export default FillerReview;