
import '@/styles/progressBarStyle.css';
import {useRef} from 'react';
import Image from 'next/image';
import recibido from '@/public/recibido.svg';
import pruebas from '@/public/pruebas.svg';
import searchT from '@/public/search-ticket.svg';
import check from '@/public/check.svg';
import checkCircle from '@/public/check-circle.svg';
import hammer from '@/public/jackhammer.svg';

export default function ProgressBar(){

    const one = useRef<HTMLDivElement>(null);
    const two = useRef<HTMLDivElement>(null);
    const three = useRef<HTMLDivElement>(null);
    const four = useRef<HTMLDivElement>(null);
    const five = useRef<HTMLDivElement>(null);


    const handleClickOne = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.remove("active");
            three.current.classList.remove("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
    };

    const handleClickTwo = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.remove("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
    };

    const handleClickThree = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
    };

    const handleClickFour = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.add("active");
            five.current.classList.remove("active");
        }
    };

    const handleClickFive = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.add("active");
            five.current.classList.add("active");
        }
    };

    return(
        <div className="main">

            <div className="head">
                <p className="head_1">Resolución del <span>Ticket</span></p>
                <p className="head_2">Proceso de resolución</p>
            </div>

            <ul>
                <li>
                    <Image alt="" src={recibido.src} width={50} height={50}></Image>
                    <div className="progress1" ref={one} onClick={handleClickOne}>
                        <p>1</p>
                    </div>
                    <p className="text">Recibido</p>
                </li>
                <li>
                    <Image alt="" src={searchT.src} width={50} height={50}></Image>
                    <div className="progress" ref={two} onClick={handleClickTwo}>
                        <p>2</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Analizado</p>
                </li>
                <li>
                    <Image alt="" src={hammer.src} width={50} height={50}></Image>
                    <div className="progress" ref={three} onClick={handleClickThree}>
                        <p>3</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">En proceso de resolución</p>
                </li>
                <li>
                    <Image alt="" src={pruebas.src} width={50} height={50}></Image>
                    <div className="progress" ref={four} onClick={handleClickFour}>
                        <p>4</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Pruebas</p>
                </li>
                <li>
                    <Image alt="" src={checkCircle.src} width={50} height={50}></Image>
                    <div className="progress" ref={five} onClick={handleClickFive}>
                        <p>5</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Entregado</p>
                </li>
            </ul>

        </div>

    )
}