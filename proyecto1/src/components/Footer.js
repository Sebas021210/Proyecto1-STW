import React, { Component } from "react";
import logo from '../images/logo.svg'
import './Styles/Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="Logo">
                    <img src={logo} alt="Logo Disney+" />
                </div>
                <div className="Links">
                    <ul className="fistList">
                        <li>
                            <a href="/politica">Política de privacidad</a>
                        </li>
                        <li>
                            <a href="/acuerdo">Acuerdo de suscripción</a>
                        </li>
                        <li>
                            <a href="/ayuda">Ayuda</a>
                        </li>
                        <li>
                            <a href="/dispositivos">Dispositivos compatibles</a>
                        </li>
                    </ul>
                    <ul className="secondList">
                        <li>
                            <a href="/acerca de">Acerca de Disney+</a>
                        </li>
                        <li>
                            <a href="/publicidad">Publicidad personalizada</a>
                        </li>
                    </ul>
                </div>
                <div className="firstText">
                    <p>El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521 y Tax ID 75-3016153</p>
                </div>
                <div className="secondText">
                    <p>© Disney. Todos los derechos reservados.</p>
                </div>
            </footer>
        )
    }
}
