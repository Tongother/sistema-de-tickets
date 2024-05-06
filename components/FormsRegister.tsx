'use client'
import { useState } from 'react';
import '@/styles/style.css';
import WindCodeHD from '@/public/WindCodeHD.png';
import Image from 'next/image';
import FondoLogin from '@/public/FondoLogin.png';
import Image1 from '@/public/image1.png';
import Image2 from '@/public/image2.png';
import Image3 from '@/public/image3.png';

const obtenerMomentoDelDia = (): string => {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
        return 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 20) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
};

export default function FormsRegister() {
    const momentoDelDia = obtenerMomentoDelDia();
    const [inputActivo, setInputActivo] = useState({ nombre: false, apellido: false, email: false, contraseña: false });
    const [contenidoInput, setContenidoInput] = useState({ nombre: '', apellido: '', email: '', contraseña: '' });
    const [cambiarForm, setCambiarForm] = useState(false);
    const [cambiarSlider, setCambiarSlider] = useState({ bullet1: true, bullet2: false, bullet3: false });
    const [cambiarImagenSlider, setCambiarImagenSlider] = useState({ imagen1: true, imagen2: false, imagen3: false });

    const manejarImagen = (imagenName: string) => {
        setCambiarImagenSlider(prevState => ({
            ...prevState,
            imagen1: false,
            imagen2: false,
            imagen3: false,
            [imagenName]: true
        }));
    };


    const manejarSlider = (bulletName: string) => {
        setCambiarSlider(prevState => ({
            ...prevState,
            bullet1: false,
            bullet2: false,
            bullet3: false,
            [bulletName]: true
        }));
    };


    const manejarFocus = (inputName: string) => {
        setInputActivo({ ...inputActivo, [inputName]: true });
    };

    const manejarBlur = (inputName: string) => {
        setInputActivo({ ...inputActivo, [inputName]: false });
    };

    const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
        setContenidoInput({ ...contenidoInput, [inputName]: event.target.value });
    };

    const manejarCambioForm = () => {
        setCambiarForm(!cambiarForm);
    };

    return (
        <main className={`bg-cover bg-center ${cambiarForm ? 'sign-up-mode' : ''}`} style={{ backgroundImage: `url(${FondoLogin.src})` }}>
            <section className="box">
                <div className="innerBox">
                    <article className="forms-wrap">
                        <form className="sign-in-form">
                            <div className="logo">
                                <img src={WindCodeHD.src} alt="WindCode" width={120} height={120} />
                            </div>

                            <div className="heading">
                                <h2>{momentoDelDia}!</h2>
                                <h6>¿No tienes una cuenta? </h6>
                                <a onClick={manejarCambioForm} className="toggle"> Registrate</a>
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className={`input-field ${inputActivo.email || contenidoInput.email ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="email"
                                        required
                                        onFocus={() => manejarFocus('email')}
                                        onBlur={() => manejarBlur('email')}
                                        onChange={(event) => manejarCambio(event, 'email')}
                                    />
                                    <label>Correo</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength={8}
                                        className={`input-field ${inputActivo.contraseña || contenidoInput.contraseña ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="contraseña"
                                        required
                                        onFocus={() => manejarFocus('contraseña')}
                                        onBlur={() => manejarBlur('contraseña')}
                                        onChange={(event) => manejarCambio(event, 'contraseña')}
                                    />
                                    <label>Contraseña</label>
                                </div>

                                <input type="submit" value="Iniciar Sesión" className="sign-btn" />

                                <p className="text">¿Olvidaste tu contraseña o tu correo? <a href="#">Obten ayuda</a> </p>

                            </div>
                        </form>

                        <form className="sign-up-form">
                            <div className="logo">
                                <Image src={`${WindCodeHD.src}`} alt="WindCode" width={120} height={120} />
                            </div>

                            <div className="heading">
                                <h2>{momentoDelDia}!</h2>
                                <h6>¿Ya tienes una cuenta? </h6>
                                <a onClick={manejarCambioForm} className="toggle"> Inicia sesión</a>
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        className={`input-field ${inputActivo.nombre || contenidoInput.nombre ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="nombre"
                                        required
                                        onFocus={() => manejarFocus('nombre')}
                                        onBlur={() => manejarBlur('nombre')}
                                        onChange={(event) => manejarCambio(event, 'nombre')}
                                    />
                                    <label>Nombre</label>
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        className={`input-field ${inputActivo.apellido || contenidoInput.apellido ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="apellido"
                                        required
                                        onFocus={() => manejarFocus('apellido')}
                                        onBlur={() => manejarBlur('apellido')}
                                        onChange={(event) => manejarCambio(event, 'apellido')}
                                    />
                                    <label>Apellidos</label>
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className={`input-field ${inputActivo.email || contenidoInput.email ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="name"
                                        required
                                        onFocus={() => manejarFocus('email')}
                                        onBlur={() => manejarBlur('email')}
                                        onChange={(event) => manejarCambio(event, 'email')}
                                    />
                                    <label>Correo</label>
                                </div>


                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength={8}
                                        className={`input-field ${inputActivo.contraseña || contenidoInput.contraseña ? 'active' : ''}`}
                                        autoComplete="off"
                                        id="contraseña"
                                        required
                                        onFocus={() => manejarFocus('contraseña')}
                                        onBlur={() => manejarBlur('contraseña')}
                                        onChange={(event) => manejarCambio(event, 'contraseña')}
                                    />
                                    <label>Contraseña</label>
                                </div>

                                <input type="submit" value="Registrarse" className="sign-btn" />

                                <p className="text">Al registrarse acepta los <a href="#">Terminos y condiciones</a> </p>

                            </div>
                        </form>
                    </article>
                    <article className="carousel">
                        <div className='images-wrapper'>
                            <img src={`${Image1.src}`} alt='Imagen 1' className={`image img-1 ${cambiarImagenSlider.imagen1 ? 'show' : ''}`} ></img>
                            <img src={`${Image2.src}`} alt='Imagen 2' className={`image img-2 ${cambiarImagenSlider.imagen2 ? 'show' : ''}`} ></img>
                            <img src={`${Image3.src}`} alt='Imagen 3' className={`image img-3 ${cambiarImagenSlider.imagen3 ? 'show' : ''}`} ></img>

                        </div>

                        <div className="text-slider">
                            <div className="text-wrap">
                                <div className="text-group" style={{ transform: cambiarSlider.bullet1 ? 'translateY(0)' : cambiarSlider.bullet2 ? 'translateY(-2.2rem)' : 'translateY(-4.4rem)' }}>
                                    <h2>Se atendido por nuestra area de soporte</h2>
                                    <h2>WindCode al servicio de tu empresa</h2>
                                    <h2>Cientos de usuarios nos respaldan</h2>
                                </div>
                            </div>
                            <div className="bullets">
                                <span className={`${cambiarSlider.bullet1 ? 'active' : ''}`} onClick={() => { manejarSlider('bullet1'); manejarImagen('imagen1'); }}></span>
                                <span className={`${cambiarSlider.bullet2 ? 'active' : ''}`} onClick={() => { manejarSlider('bullet2'); manejarImagen('imagen2'); }}></span>
                                <span className={`${cambiarSlider.bullet3 ? 'active' : ''}`} onClick={() => { manejarSlider('bullet3'); manejarImagen('imagen3'); }}></span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};