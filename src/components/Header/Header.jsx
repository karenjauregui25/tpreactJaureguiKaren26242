import { Nav} from "../Nav/Nav"

import logo from "../../assets/logo2.png";
import "./Header.css"
import {Link} from "react-router-dom";

export const Header = () => {
    return ( <header>
        <div className="logo-container">
            <Link to= {"/"}>
                <img src= {logo} alt="Vertice sonoro"/>
                <p> Vertice Sonoro</p>
            
          </Link>

        </div>
        <Nav/>
        
    </header>
    )
};