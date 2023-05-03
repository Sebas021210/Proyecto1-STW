import React, { Component } from "react";
import logo from '../images/logo.svg'
import home from '../images/home.svg'
import search from '../images/search.svg'
import watchlist from '../images/watchlist.svg'
import original from '../images/original.svg'
import movies from '../images/movie.svg'
import series from '../images/series.svg'
import './Styles/Header.css'

export default class Header extends Component{
    render(){
        return(
            <header>
                <logo>
                    <img src={logo} alt="Logo Disney+" />
                </logo>
                <nav>
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
            </header>
        );
    }
};
