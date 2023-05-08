import React, { Component } from "react";
import img1SW from '../../images/starwars/img1.jpg'
import img2SW from '../../images/starwars/img2.jpg'
import img3SW from '../../images/starwars/img3.jpg'
import img4SW from '../../images/starwars/img4.jpg'
import img5SW from '../../images/starwars/img5.jpg'
import img6SW from '../../images/starwars/img6.jpg'
import img7SW from '../../images/starwars/img7.jpg'
import img8SW from '../../images/starwars/img8.jpg'
import img9SW from '../../images/starwars/img9.jpg'
import img10SW from '../../images/starwars/img10.jpg'

import img1N from '../../images/novedades/img1.jpg'
import img2N from '../../images/novedades/img2.jpg'
import img3N from '../../images/novedades/img3.jpg'
import img4N from '../../images/novedades/img4.jpg'
import img5N from '../../images/novedades/img5.jpg'
import img6N from '../../images/novedades/img6.jpg'
import img7N from '../../images/novedades/img7.jpg'
import img8N from '../../images/novedades/img8.jpg'
import img9N from '../../images/novedades/img9.jpg'
import img10N from '../../images/novedades/img10.jpg'

import img1IC from '../../images/iconos/img1.jpg'
import img2IC from '../../images/iconos/img2.jpg'
import img3IC from '../../images/iconos/img3.jpg'
import img4IC from '../../images/iconos/img4.jpg'
import img5IC from '../../images/iconos/img5.jpg'
import img6IC from '../../images/iconos/img6.jpg'
import img7IC from '../../images/iconos/img7.jpg'
import img8IC from '../../images/iconos/img8.jpg'
import img9IC from '../../images/iconos/img9.jpg'
import img10IC from '../../images/iconos/img10.jpg'

import img1R from '../../images/recomendaciones/img1.jpg'
import img2R from '../../images/recomendaciones/img2.jpg'
import img3R from '../../images/recomendaciones/img3.jpg'
import img4R from '../../images/recomendaciones/img4.jpg'
import img5R from '../../images/recomendaciones/img5.jpg'
import img6R from '../../images/recomendaciones/img6.jpg'
import img7R from '../../images/recomendaciones/img7.jpg'
import img8R from '../../images/recomendaciones/img8.jpg'
import img9R from '../../images/recomendaciones/img9.jpg'
import img10R from '../../images/recomendaciones/img10.jpg'

import prev from '../../images/prev.png'
import next from '../../images/next.png'
import '../Styles/Movies.css'

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPages: {
                SW: 0,
                N: 0,
                IC: 0,
                R: 0,
            },
            totalPages: {
                SW: 0,
                N: 0,
                IC: 0,
                R: 0,
            },
        };
    }

    componentDidMount() {
        const totalMoviesSW = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW,].length;
        const totalMoviesN = [img1N, img2N, img3N, img4N, img5N, img6N, img7N, img8N, img9N, img10N,].length;
        const totalMoviesIC = [img1IC, img2IC, img3IC, img4IC, img5IC, img6IC, img7IC, img8IC, img9IC, img10IC,].length;
        const totalMoviesR = [img1R, img2R, img3R, img4R, img5R, img6R, img7R, img8R, img9R, img10R,].length;
        const totalPages = {
            SW: Math.ceil(totalMoviesSW / 5),
            N: Math.ceil(totalMoviesN / 5),
            IC: Math.ceil(totalMoviesIC / 5),
            R: Math.ceil(totalMoviesR / 5),
        };
        this.setState({ totalPages });
    }

    handlePrevClick = (listName) => {
        const { currentPages } = this.state;
        if (currentPages[listName] > 0) {
            const newCurrentPages = {
                ...currentPages,
                [listName]: currentPages[listName] - 5,
            };
            this.setState({ currentPages: newCurrentPages });
        }
    };

    handleNextClick = (listName) => {
        const { currentPages, totalPages } = this.state;
        if (currentPages[listName] < totalPages[listName] - 1) {
            const newCurrentPages = {
                ...currentPages,
                [listName]: currentPages[listName] + 5,
            };
            this.setState({ currentPages: newCurrentPages });
        }
    };

    render() {
        const { currentPages } = this.state;
        const visibleMoviesSW = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW,].slice(currentPages.SW, currentPages.SW + 5);
        const visibleMoviesN = [img1N, img2N, img3N, img4N, img5N, img6N, img7N, img8N, img9N, img10N,].slice(currentPages.N, currentPages.N + 5);
        const visibleMoviesIC = [img1IC, img2IC, img3IC, img4IC, img5IC, img6IC, img7IC, img8IC, img9IC, img10IC,].slice(currentPages.IC, currentPages.IC + 5);
        const visibleMoviesR = [img1R, img2R, img3R, img4R, img5R, img6R, img7R, img8R, img9R, img10R,].slice(currentPages.R, currentPages.R + 5);

        return (
            <div className="container">
                <div className="movies">
                    <h1 className="title">Star Wars: Películas y series</h1>
                    <div className="movies-list-grande">
                        <button className="prevBtn" onClick={() => this.handlePrevClick("SW")}><img src={prev} alt="" /></button>
                        <button className="nextBtn" onClick={() => this.handleNextClick("SW")}><img src={next} alt="" /></button>
                        <div className="card-container-grande">
                            {visibleMoviesSW.map((movie) => (
                                <div className="card-grande">
                                    <img src={movie} className="card-img-grande" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Novedades en Disney+</h1>
                    <div className="movies-list-peque">
                        <button className="prevBtn" onClick={() => this.handlePrevClick("N")}><img src={prev} alt="" /></button>
                        <button className="nextBtn" onClick={() => this.handleNextClick("N")}><img src={next} alt="" /></button>
                        <div className="card-container-peque">
                            {visibleMoviesN.map(movie => (
                                <div className="card-peque">
                                    <img src={movie} className="card-img-peque" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Íconos del pop</h1>
                    <div className="movies-list-grande">
                        <button className="prevBtn" onClick={() => this.handlePrevClick("IC")}><img src={prev} alt="" /></button>
                        <button className="nextBtn" onClick={() => this.handleNextClick("IC")}><img src={next} alt="" /></button>
                        <div className="card-container-grande">
                            {visibleMoviesIC.map(movie => (
                                <div className="card-grande">
                                    <img src={movie} className="card-img-grande" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Recomendaciones para ti</h1>
                    <div className="movies-list-peque">
                        <button className="prevBtn" onClick={() => this.handlePrevClick("R")}><img src={prev} alt="" /></button>
                        <button className="nextBtn" onClick={() => this.handleNextClick("R")}><img src={next} alt="" /></button>
                        <div className="card-container-peque">
                            {visibleMoviesR.map(movie => (
                                <div className="card-peque">
                                    <img src={movie} className="card-img-peque" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
