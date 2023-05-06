import React, { Component } from "react";
import img1SW from '../../images/starwars/img1.jpg'
import img2SW from '../../images/starwars/img2.jpg'
import img3SW from '../../images/starwars/img3.jpg'
import img4SW from '../../images/starwars/img4.jpg'
import img5SW from '../../images/starwars/img5.jpg'

import img1N from '../../images/novedades/img1.jpg'
import img2N from '../../images/novedades/img2.jpg'
import img3N from '../../images/novedades/img3.jpg'
import img4N from '../../images/novedades/img4.jpg'
import img5N from '../../images/novedades/img5.jpg'

import img1IC from '../../images/iconos/img1.jpg'
import img2IC from '../../images/iconos/img2.jpg'
import img3IC from '../../images/iconos/img3.jpg'
import img4IC from '../../images/iconos/img4.jpg'
import img5IC from '../../images/iconos/img5.jpg'

import img1R from '../../images/recomendaciones/img1.jpg'
import img2R from '../../images/recomendaciones/img2.jpg'
import img3R from '../../images/recomendaciones/img3.jpg'
import img4R from '../../images/recomendaciones/img4.jpg'
import img5R from '../../images/recomendaciones/img5.jpg'
import '../Styles/Movies.css'

export default class Movies extends Component {
    render(){
        return(
            <div className="container">
                <div className="movies">
                    <h1 className="title">Star Wars: Películas y series</h1>
                    <div className="movies-list-grande">
                        <div className="card-container-grande">
                            <div className="card-grande">
                                <img src={img1SW} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img2SW} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img3SW} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img4SW} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img5SW} className="card-img-grande" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Novedades en Disney+</h1>
                    <div className="movies-list-peque">
                        <div className="card-container-peque">
                            <div className="card-peque">
                                <img src={img1N} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img2N} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img3N} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img4N} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img5N} className="card-img-peque" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Íconos del pop</h1>
                    <div className="movies-list-grande">
                    <div className="card-container-grande">
                            <div className="card-grande">
                                <img src={img1IC} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img2IC} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img3IC} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img4IC} className="card-img-grande" alt="" />
                            </div>
                            <div className="card-grande">
                                <img src={img5IC} className="card-img-grande" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movies">
                    <h1 className="title">Recomendaciones para ti</h1>
                    <div className="movies-list-peque">
                        <div className="card-container-peque">
                            <div className="card-peque">
                                <img src={img1R} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img2R} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img3R} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img4R} className="card-img-peque" alt="" />
                            </div>
                            <div className="card-peque">
                                <img src={img5R} className="card-img-peque" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}