import React, { Component } from "react";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import '../Styles/Slide.css'

const movies = [
  {
    name: 'Movie 1',
    des: 'This is the first movie',
    image: img1
  },
  {
    name: 'Movie 2',
    des: 'This is the second movie',
    image: img2
  },
  {
    name: 'Movie 3',
    des: 'This is the third movie',
    image: img3
  },
  {
    name: 'Movie 4',
    des: 'This is the fourth movie',
    image: img4
  },
  {
    name: 'Movie 5',
    des: 'This is the fifth movie',
    image: img5
  },
  {
    name: 'Movie 6',
    des: 'This is the sixth movie',
    image: img6
  },
  {
    name: 'Movie 7',
    des: 'This is the seventh movie',
    image: img7
  },
  {
    name: 'Movie 8',
    des: 'This is the eighth movie',
    image: img8
  }
];

export default class Slide extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel');
    let sliders = [];
    let slideIndex = 0;

    const createSlide = () => {
      if (slideIndex >= movies.length) {
        slideIndex = 0;
      }

      let slide = document.createElement('div');
      let imgElement = document.createElement('img');
      let content = document.createElement('div');
      let h1 = document.createElement('h1');
      let p = document.createElement('p');

      imgElement.appendChild(document.createTextNode(''));
      h1.appendChild(document.createTextNode(movies[slideIndex].name));
      p.appendChild(document.createTextNode(movies[slideIndex].des));
      content.appendChild(h1);
      content.appendChild(p);
      slide.appendChild(imgElement);
      slide.appendChild(content);
      carousel.appendChild(slide);

      imgElement.src = movies[slideIndex].image;
      slideIndex++;

      slide.className = 'slider';
      content.className = 'slide-content';
      h1.className = 'title';
      p.className = 'movie';

      sliders.push(slide);

      if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
      }
    }

    for (let i = 0; i < 3; i++) {
      createSlide();
    }

    setInterval(() => {
      createSlide();
    }, 5000);
  }

  render() {
    return (
      <div className="SliderContainer">
        <div className="carousel"></div>
        <div className="dots-container"></div>
      </div>
    );
  }
}
