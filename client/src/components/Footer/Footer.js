import React from "react";
import "./footer.css";


function Footer() {

    return (
        <div className="main-footer mt-4">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Наши контакты:</h4>
                        <h6 className="list-unstyled">
                            <li>Бизнес-центр Baytik Tower</li>
                            <li>Кыргызская Республика, г.Бишкек, ул.</li>
                            <li>Байтик-Баатыра 66/1</li>
                        </h6>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Отдел продаж:</h4>
                        <ui className="list-unstyled">
                            <a class="text-decoration-none text-white" href="mailto: baytiktower@gmail.com">baytiktower@gmail.com</a>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Офис:</h4>
                        <ui className="list-unstyled">
                            <li><a class="text-decoration-none text-white" href="tel:+ 996 551 400 800">+ 996 551 400 800</a></li>
                            <li><a class="text-decoration-none text-white" href="tel:+ 996 779 888 833">+ 996 779 888 833</a></li>
                            <li><a class="text-decoration-none text-white" href="tel:+ 996 709 888 833">+ 996 709 888 833</a></li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p style={{ cursor: "pointer" }} className="col-sm">
                        &copy;{new Date().getFullYear()} REAL ESTATES | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;