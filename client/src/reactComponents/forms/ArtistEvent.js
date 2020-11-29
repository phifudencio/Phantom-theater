import React from 'react'
import '../artist/Artist.css'

function ArtistEvent(props) {
  let artistImage1 = <img src={props.image1} alt="" className="artistImage" />
  let artistImage2 = <img src={props.image2} alt="" className="artistImage" />
  let artistImage3 = <img src={props.image3} alt="" className="artistImage" />
  return (
    <div className="artistsContainer">
      <h3>{props.artist}</h3>

      <div className="artistImageContainer">
        {artistImage1}
        {artistImage2}
        {artistImage3}
      </div>

      <div className="textContainer">
        <p>{props.blurb}</p>

        <div className="artistContact">
          <h5> {props.email}</h5>
          
          <a href={props.link1}>Artist Link</a>
          <a href={props.link2}>Artist Link</a>
          <br />
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default ArtistEvent