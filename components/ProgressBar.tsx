
import '@/styles/progressBarStyle.css';
import { useEffect } from 'react';
export default function ProgressBar(){
    useEffect(()=>{
        const one = document.querySelector(".one") as HTMLElement;
        const two = document.querySelector(".two") as HTMLElement;
        const three = document.querySelector(".three") as HTMLElement;
        const four = document.querySelector(".four") as HTMLElement;
        const five = document.querySelector(".five") as HTMLElement;
    
        const handleClickOne = () => {
            one.classList.add("active");
            two.classList.remove("active");
            three.classList.remove("active");
            four.classList.remove("active");
            five.classList.remove("active");
        };
    
        const handleClickTwo = () => {
            one.classList.add("active");
            two.classList.add("active");
            three.classList.remove("active");
            four.classList.remove("active");
            five.classList.remove("active");
        };
    
        const handleClickThree = () => {
            one.classList.add("active");
            two.classList.add("active");
            three.classList.add("active");
            four.classList.remove("active");
            five.classList.remove("active");
        };
    
        const handleClickFour = () => {
            one.classList.add("active");
            two.classList.add("active");
            three.classList.add("active");
            four.classList.add("active");
            five.classList.remove("active");
        };
    
        const handleClickFive = () => {
            one.classList.add("active");
            two.classList.add("active");
            three.classList.add("active");
            four.classList.add("active");
            five.classList.add("active");
        };
    
        one.onclick = handleClickOne;
        two.onclick = handleClickTwo;
        three.onclick = handleClickThree;
        four.onclick = handleClickFour;
        five.onclick = handleClickFive;
    },[]);

    return(
        <div className="main">

            <div className="head">
                <p className="head_1">Resolución del <span>Ticket</span></p>
                <p className="head_2">Proceso de resolución</p>
            </div>

            <ul>
                <li>
                    <i className="icon uil uil-capture"></i>
                    <div className="progress one">
                        <p>1</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Recibido</p>
                </li>
                <li>
                    <i className="icon uil uil-clipboard-notes"></i>
                    <div className="progress two">
                        <p>2</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Analizado</p>
                </li>
                <li>
                    <i className="icon uil uil-credit-card"></i>
                    <div className="progress three">
                        <p>3</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">En proceso de resolución</p>
                </li>
                <li>
                    <i className="icon uil uil-exchange"></i>
                    <div className="progress four">
                        <p>4</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Pruebas</p>
                </li>
                <li>
                    <i className="icon uil uil-map-marker"></i>
                    <div className="progress five">
                        <p>5</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Entregado</p>
                </li>
            </ul>

        </div>

    )
}