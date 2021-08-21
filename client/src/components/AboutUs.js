import "./styles.css";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import logo from "../assets/dp-logo-full.png"
export default function AboutUs() {
    return (
        <div className="App">
            <div style={{ margin: "60px 0px 120px 0px" }} className="d-flex align-items-center flex-column">
                <h3 style={{ width: "800px" }}>Design Pickle<hr />это молодая динамично развивающаяся компания по продаже недвижимости на рынке Кыргызстана</h3>
                <hr />
                <h4 style={{ width: "1000px" }}>Миссия BGB Development– это продажа квартир и домов высокого уровня.</h4>
            </div>
            <ParallaxProvider>
                <ParallaxBanner
                    className="your-class"
                    layers={[

                        {
                            image: "https://i.imgur.com/IBHyQwY.png",
                            amount: 0.8
                        },
                    ]}
                    style={{
                        height: "700px"
                    }}
                >
                </ParallaxBanner>
            </ParallaxProvider>
            <div style={{ margin: "80px 0px 120px 0px" }} className="d-flex align-items-center flex-column">
                <h1>Наши Преимущества</h1>
                <div className="row mt-4">
                    <div className="col-4">В шаговой доступности расположены: банки, государственные учреждения, торгово-развлекательные комплексы, школы, садики, кофейни, рестораны и многое другое.</div>
                    <div className="col-4">Многофункциональный конференц-зал для проведения бизнес мероприятий</div>
                    <div className="col-4">Охраняемый подземный и надземный паркинг на собственной территории на 80 мест.</div>
                </div>
                 <div style={{marginBottom: "80px", marginTop: "60px"}} className="row">
                    <div className="col-4">Управляющая компания –это гарант качества, комфорта и повышения деловой жизни бизнес-центра.</div>
                    <div className="col-4">Круглосуточное видеонаблюдение, охранная сигнализация, система контроля доступа и автоматическая система пожарной сигнализации обеспечат безопасность вам и вашему бизнесу.</div>
                    <div className="col-4">Централизованная диспетчеризация серверных систем и большой выбор провайдеров по подключению интернета.</div>
                </div>
            </div>
        </div>
    );
}
