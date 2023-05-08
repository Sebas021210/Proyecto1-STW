import React, { Component } from "react";
import disney from '../../images/option-disney.png'
import disneyVideo from '../../videos/option-disney.mp4'
import pixar from '../../images/option-pixar.png'
import pixarVideo from '../../videos/option-pixar.mp4'
import marvel from '../../images/option-marvel.png'
import marvelVideo from '../../videos/option-marvel.mp4'
import star from '../../images/option-starwars.png'
import starVideo from '../../videos/option-star-wars.mp4'
import national from '../../images/option-national.png'
import nationalVideo from '../../videos/option-national-geographic.mp4'
import '../Styles/Cards.scss'

export default class Cards extends Component {
  componentDidMount() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(item => {
      item.addEventListener('mouseover', () => {
        let video = item.querySelector('.card-video');
        video.play();
      })
      item.addEventListener('mouseleave', () => {
        let video = item.querySelector('.card-video');
        video.pause();
      })
    })
  }

  render() {
    return (
      <div className="video-card-container">
        <div className="video-card">
          <img src={disney} className="video-card-image" alt="" />
          <video src={disneyVideo} muted loop className="card-video"></video>
        </div>
        <div className="video-card">
          <img className="video-card-image" src={pixar} alt="" />
          <video className="card-video" src={pixarVideo} muted loop></video>
        </div>
        <div className="video-card">
          <img className="video-card-image" src={marvel} alt="" />
          <video className="card-video" src={marvelVideo} muted loop></video>
        </div>
        <div className="video-card">
          <img className="video-card-image" src={star} alt="" />
          <video className="card-video" src={starVideo} muted loop></video>
        </div>
        <div className="video-card">
          <img className="video-card-image" src={national} alt="" />
          <video className="card-video" src={nationalVideo} muted loop></video>
        </div>
      </div>
    );
  }
}
