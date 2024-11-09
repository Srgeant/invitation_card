import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Wedding.css";
import img from "./img/IMG1.JPG";
import img4 from "./img/ornament.png"
import img5 from "./img/img4.jpg"
import img6 from "./img/img5.jpg"
import img7 from "./img/img6.jpg"
import img8 from "./img/img7.jpg"
import time from "./img/time.jpg"
import vertical from "./img/vertical.webp"

function Wedding() {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const countDownDate = new Date("November 28, 2024 23:59:59").getTime();

        const countDown = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(countDown);
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
            } else {
                setTimeLeft({
                    days: String(days).padStart(2, "0"),
                    hours: String(hours).padStart(2, "0"),
                    minutes: String(minutes).padStart(2, "0"),
                    seconds: String(seconds).padStart(2, "0"),
                });
            }
        }, 1000);

        return () => clearInterval(countDown);
    }, []);

    return (
        <div className="weddingDiv">
            <header className="weddingHeader">
                <div className="weddingInfoDiv">
                    <h1 className="weddingInfo">Spartak & Nare</h1>
                </div>
                <div className="countDown">
                    <div className="timeSection">
                        <span id="days" className="number">{timeLeft.days}</span>
                        <span className="label">Days</span>
                    </div>
                    <div className="timeSection">
                        <span id="hours" className="number">{timeLeft.hours}</span>
                        <span className="label">Hours</span>
                    </div>
                    <div className="timeSection">
                        <span id="minutes" className="number">{timeLeft.minutes}</span>
                        <span className="label">Minutes</span>
                    </div>
                    <div className="timeSection">
                        <span id="seconds" className="number">{timeLeft.seconds}</span>
                        <span className="label">Seconds</span>
                    </div>
                </div>
                <div className="img1Div">
                    <img src={img} alt="Wedding 1" className="headerImg1"/>
                </div>
            </header>
            <main className="weddingMain">
                <div className="weddingMainDiv">
                    <h2 className="weddingMainH2">Հարսանյաց հրավեր</h2>
                    <p className="beforeOrnament">
                        Ուրախ ենք Ձեզ տեղեկացնել, որ 
                    </p>
                    <div className="weddingDay">
                        <img src={img4} className="img4"/>
                        <p className="dayOfWedding">
                            28.11.2024
                        </p>
                    </div>
                    <p className="afterOrnament">
                        տեղի կունենա մեր հարսանյաց արարողությունը։
                    </p>
                    <p className="afterOrnament2">
                        Մենք սրտանց ցանկանում ենք, որ մեր կյանքի այս անմոռանալի օրը անցկացնեք մեզ հետ։
                    </p>
                </div>
                <div className="weddingMainImg">
                    <div className="leftColumn">
                        <img src={img5} className="img5"/>
                        <img src={img7} className="img6"/>
                    </div>
                    <div className="addressDiv">
                        <img src={vertical} className="vertical"/>
                        <div className="church">
                            <h3>
                                <img src={time} className="churchImg"/>
                                <span>15:20</span>
                            </h3>
                            <p>Սուրբ Հռիփսիմե եկեղեցի</p>
                            <a href="https://yandex.com/maps/org/35208500744/?ll=44.322901%2C40.153921&z=14.07" target="_blank" className="churchHref">
                                Հասցե ՝ ք․ Էջմիածին
                            </a>
                        </div>
                        <div className="restaurant">
                            <h3>
                                <img src={time} className="restaurantImg"/>
                                <span>18:00</span>
                            </h3>
                            <p>«Հրաշք Այգի» ռեստորանային համալիր</p>
                            <a href="https://yandex.com/maps/org/73537021709/?ll=44.717546%2C39.953572&z=10.84" target="-blank"className="restaurantHref">
                                Հասցե ՝ Արարատի մարզ, գ. Մխչյան
                            </a>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <img src={img6} className="img7"/>
                        <img src={img8} className="img8"/>
                    </div>
                </div>
            </main>
            <footer className="myFooter">
                <p className="Creator">
                    Պատրաստել է 
                </p>
                <div className="footerDiv">
                    <a href="https://www.instagram.com/s.eloyan97?igsh=MWNueG5ubmRqdGE2aQ%3D%3D&utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.instagram.com/s.eloyan97?igsh=MWNueG5ubmRqdGE2aQ%3D%3D&utm_source=qr" target="_blank" className="myPage">@s.eloyan97</a>
                </div>
                <p>
                    © 2024 Eloyan Sergey
                </p>
            </footer>
        </div>
    );
}

export default Wedding;