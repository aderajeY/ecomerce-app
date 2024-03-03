import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h1>Aderajew shop</h1>
            </div>
            <div className="navbarLinks">
            
                <Link to = '/'>shop</Link>
                <Link to = '/purchased'>purchases</Link>
                <Link to = '/checkout'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
        </div>
    )

}