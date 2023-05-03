import React, { Component } from "react";
import logo from '../images/logo.svg'
import home from '../images/home.svg'
import search from '../images/search.svg'
import watchlist from '../images/watchlist.svg'
import original from '../images/original.svg'
import movies from '../images/movie.svg'
import series from '../images/series.svg'
import spiderman from '../images/spiderman.png'
import vision from '../images/vision.png'
import wanda from '../images/wanda.png'
import grogu from '../images/grogu.png'
import loki from '../images/loki.png'
import chi from '../images/Chi.png'
import './Styles/Header.css'

export default class Header extends Component{
    render(){
        return(
            <header>
                <nav>
                    <img src={logo} alt="Logo Disney+" />
                    <nav id="Menu">
                        <a href='/inicio'>
                            <img src={home} alt='INICIO'/>
                            <span>INICIO</span>
                        </a>

                        <a href='/busqueda'>
                            <img src={search} alt='BÚSQUEDA'/>
                            <span>BÚSQUEDA</span>
                        </a>
                        
                        <a href='/lista'>
                            <img src={watchlist} alt='MI LISTA'/>
                            <span>MI LISTA</span>
                        </a>
                        
                        <a href='/originales'>
                            <img src={original} alt='ORIGINALES'/>
                            <span>ORIGINALES</span>
                        </a>

                        <a href='/peliculas'>
                            <img src={movies} alt='PELÍCULAS'/>
                            <span>PELÍCULAS</span>
                        </a>
                        
                        <a href='/series'>
                            <img src={series} alt='SERIES'/>
                            <span>SERIES</span>
                        </a>
                    </nav>

                    <div class="profile">
                        <div class="profile-selected">
                            <p id="name-user">Sebas</p>
                            <img class="avatar img-user" src={spiderman} alt="spiderman"/>
                        </div>
                        
                        <nav class="profile-nav">
                            <ul class="profile-nav-profiles">
                                <li>
                                    <img class="avatar" src={vision} alt="vision"/>
                                    <p>Master</p>
                                </li>
                                <li>
                                    <img class="avatar" src={wanda} alt="wanda"/>
                                    <p>Tiviet</p>
                                </li>
                                <li>
                                    <img class="avatar" src={grogu} alt="grogu"/>
                                    <p>Valdez</p>
                                </li>
                                <li>
                                    <img class="avatar" src={loki} alt="Loki"/>
                                    <p>Manuel</p>
                                </li>
                                <li>
                                    <img class="avatar" src={chi} alt="chi"/>
                                    <p>Ludwing</p>
                                </li>
                                <div class="opciones">
                                    <li><a href='/editar perfiles'><span>Editar perfiles</span></a></li>
                                    <li><a href='/ajustes'><span>Ajustes de aplicación</span></a></li>
                                    <li><a href='/cuenta'><span>Cuenta</span></a></li>
                                    <li><a href='/ayuda'><span>Ayuda</span></a></li>
                                    <li><a href='/cerrar sesion'><span>Cerrar sesión</span></a></li>
                                </div>
                                
                            </ul>
                            <ul class="profile-nav-options">
                                
                            </ul>
                        </nav>
                    </div>
                </nav>
            </header>
        );
    }
};
