import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Restaurant.css';

function Restaurant() {
    // const navigate= useNavigate();
    return (
        <div>


            {/* <Link to="/pickurusu">Go to Pickurusu</Link> */}
            {/* <button onClick={()=> navigate("/pickurusu")}>View Pickurusu</button> */}

            <nav className="navbar">
                <h2 className="logo">Restaurant</h2>
                <ul className="nav-links">
                    <li className="dropdown">
                        <span>Premium 🥩 ▾</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/lunch'>   
                                <span>Lunch</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/sarada'>
                                    <span>Dinner</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span>Order ▾</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/vegetableSoupOrder">
                                    <span>Vegetable Soup Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/alcholOrder'>   
                                <span>alcholOrder</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/nabata'>   
                                <span>NabataColtd</span>
                                </Link>
                            </li>
                            <li>Drinks</li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <span>Recipe ▾</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/pickurusu'>   
                                <span>Pickurusu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/sarada'>
                                    <span>Sarada</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/vegetableSoup">
                                    <span>Vegetable</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* RIGHT SIDE SPACE / ITEM */}
                <div className="nav-right">
                    <button className="login-btn">Login</button>
                </div>
            </nav>
        </div>

    );
}

export default Restaurant;
