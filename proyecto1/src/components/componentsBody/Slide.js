import React, { Component } from "react";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.jpg'
import prev from '../../images/prev.png'
import next from '../../images/next.png'
import '../Styles/Slide.scss'

const movies = [
  {
    name: 'Movie 9',
    image: img9
  },
  {
    name: 'Movie 1',
    image: img1
  },
  {
    name: 'Movie 2',
    image: img2
  },
  {
    name: 'Movie 3',
    image: img3
  },
  {
    name: 'Movie 4',
    image: img4
  },
  {
    name: 'Movie 5',
    image: img5
  },
  {
    name: 'Movie 6',
    image: img6
  },
  {
    name: 'Movie 7',
    image: img7
  },
  {
    name: 'Movie 8',
    image: img8
  },

];

export default class Slide extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let sliders = [];
    let slideIndex = 0;
    let intervalId = null;

    const createSlide = () => {
      if (slideIndex >= movies.length) {
        slideIndex = 0;
      }

      let slide = document.createElement('div');
      let imgElement = document.createElement('img');
      let content = document.createElement('div');
      let h1 = document.createElement('h1');

      h1.appendChild(document.createTextNode(movies[slideIndex].name));
      content.appendChild(h1);
      slide.appendChild(imgElement);
      slide.appendChild(content);
      carousel.appendChild(slide);
      imgElement.src = movies[slideIndex].image;

      slide.className = 'slider';
      content.className = 'slide-content';
      h1.className = 'title';

      sliders.push(slide);

      if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
      }
    }

    for (let i = 0; i < 3; i++) {
      slideIndex++;
      createSlide();
    }

    nextButton.addEventListener("click", () => {
      slideIndex++;
      createSlide();
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        slideIndex++;
        createSlide();
      }, 5000);
    });

    prevButton.addEventListener("click", () => {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = movies.length - 1;
      }
      clearInterval(intervalId);
      createSlide();
      intervalId = setInterval(() => {
        slideIndex++;
        createSlide();
      }, 5000);
    });

    intervalId = setInterval(() => {
      slideIndex++;
      createSlide();
    }, 5000);
  }

  render() {
    return (
      <div className="SliderContainer">
        <div className="carousel"></div>
        <button className="prev"><img src={prev} alt="" /></button>
        <button className="next"><img src={next} alt="" /></button>
      </div>
    );
  }
}
