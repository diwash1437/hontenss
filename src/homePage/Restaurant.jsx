import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Restaurant.css';
import { img } from "../utils/img";

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
                                <Link to="/fujimatsu">
                                    <span>(株)ふじまつ Fujimatsu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/nichibecoffee">
                                    <span>日米珈琲(株) Nichibe Coffee</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/tsCorporation'>
                                    <span>Ts-Corporation</span>
                                </Link>
                            </li>
                           <li>
                                <Link to='/nabata'>
                                    <span> (株)名畑 NabataColtd</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/yoshimuratakeshi">
                                    <span>(株)吉村武 Yoshimuratakeshi</span>
                                </Link>
                            </li>


                       
                            <li>
                                <Link to=''>
                                    <span>エコラボ合同会社 cleaning product</span>
                                </Link>
                            </li>
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
                {/* <div>       
                    <Link to='/just-today'>
                        <span>Today report</span>
                        </Link>
                </div> */}
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
                <div className="lunch-second-grid">                    
                    <div className="lunch-third-child">  
                     <div className="lunch-container">
                        <div className="left-menu-container">
                        <div>Main menu in a restaurant, as opposed to the lunchtime menu</div>
                        <div className="second"> Casual restaurant offering a wide variety of dishes for casual dining.
                            Enjoy Italian cuisine with Japanese elements, using a variety of Kyoto
                            ingredients such as Hiei yuba, Kyoto duck, Kyoto mochi pork, and kujo
                            leeks. We also recommend our seasonal menu, which offers a taste of the
                            season. The tartine arranged with monaca is both tasty and visually
                            appealing.</div>
                        <button className="lunch-menu-btn">See more</button>
                        </div>                                      
                        <div className="lunchmenu-image-grid">
                            <img src="./image/lunch/mabusi.jpg" alt="" width={150}/>
                            <img src={img('lunch/harami.jpg')} alt="" width={150}/>
                            <img src={img('lunch/mabusi.jpg')} alt=""  width={150}/>
                            <img src={img('lunch/saikoro.jpg')} alt="saikoro" width={150} />
                    
                        </div>
                     </div>
                    </div>


                </div>
            </section>

            </main>


        </div>

    );
}

export default Restaurant;
