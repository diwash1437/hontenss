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
                                <Link to='/dinner'>
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
                                <Link to='/tsCorporation'>
                                    <span>Ts-Corporation</span>
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
            <section>
                <div className="head-img">
                    <img src="./image/homepage.jpg" alt="" />
                </div>

            </section>

            <main>
                <section className="lunch-grid">
                    <div className="lunch-container">
                    <div className="left-lunch-container">
                        <img src="./image/lunch/mabusi.jpg" alt="" />
                    </div>
                    <div className="right-menu-container">
                        <div>Main menu in a restaurant, as opposed to the lunchtime menu</div>
                        <div className="second"> Casual restaurant offering a wide variety of dishes for casual dining.
                            Enjoy Italian cuisine with Japanese elements, using a variety of Kyoto
                            ingredients such as Hiei yuba, Kyoto duck, Kyoto mochi pork, and kujo
                            leeks. We also recommend our seasonal menu, which offers a taste of the
                            season. The tartine arranged with monaca is both tasty and visually
                            appealing.</div>
                        <button>See more</button>
                    </div>
                    </div>
                </section>

            </main>


        </div>

    );
}

export default Restaurant;
