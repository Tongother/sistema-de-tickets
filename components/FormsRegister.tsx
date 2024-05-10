'use client'
import { useState, useRef } from 'react';
import '@/styles/style.css';
import WindCodeHD from '@/public/WindCodeHD.png';
import Image from 'next/image';
import FondoLogin from '@/public/FondoLogin.png';
import Image1 from '@/public/image1.png';
import Image2 from '@/public/image2.png';
import Image3 from '@/public/image3.png';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
    const formRef = useRef<HTMLFormElement>(null);
    const formRefRegister = useRef<HTMLFormElement>(null);
    const [inputActivo, setInputActivo] = useState({ nombre: false, apellido: false, email: false, password: false, confirmPassword: false, emailLogin: false, passwordLogin: false });
    const [contenidoInput, setContenidoInput] = useState({ nombre: '', apellido: '', email: '', password: '', confirmPassword: '', emailLogin: '', passwordLogin: '' });
    const [cambiarForm, setCambiarForm] = useState(false);
    const [cambiarSlider, setCambiarSlider] = useState({ bullet1: true, bullet2: false, bullet3: false });
    const [cambiarImagenSlider, setCambiarImagenSlider] = useState({ imagen1: true, imagen2: false, imagen3: false });
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordError, setPasswordError] = useState(false);
    const router = useRouter();

    const registerHandleSubmit = async (event: any) => {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Restablecer el estado de error de contraseña
        setPasswordError(false);

        // Verificar si la contraseña y la confirmación de contraseña coinciden
        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true); // Establecer el estado de error de contraseña en true
        } else {
            // Si las contraseñas coinciden, procede con el registro
            try {
                const response = await axios.post('/api/auth/register', formData);
                console.log(response.data);
                alert('Usuario registrado exitosamente');
                // Aquí puedes realizar alguna acción adicional después de enviar los datos
            } catch (error) {
                setRegisterError(true);
                setTimeout(() => {
                    setRegisterError(false);
                }, 6000);
            } finally {
                // Reiniciar el formulario si event.currentTarget está definido
                setContenidoInput({ ...contenidoInput, nombre: '', apellido: '', email: '', password: '', confirmPassword: ''})
                if (formRefRegister.current) {
                    formRefRegister.current.reset();
                }
            }
        }
    };

    const registerHandleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const loginHandlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', credentials, {
                withCredentials: true
            });
            const { tipoUsuario } = response.data;
            switch (tipoUsuario) {
                case 'Cliente':
                    window.location.href = '/cliente';
                    break;
                case 'Asesor':
                    window.location.href = '/advisor';
                    break;
                case 'Admin':
                    window.location.href = '/dashboard';
                    break;
                default:
                    window.location.href = '/';
                    break;
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setLoginError(true);
            setTimeout(() => {
                setLoginError(false);
            }, 2500);
        } finally {
            // Reiniciar el formulario si event.currentTarget está definido
            setContenidoInput({ ...contenidoInput, emailLogin: '', passwordLogin: '' })
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    };
    const loginHandleChange = (event: any) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

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
            {registerError && (
                <div className="z-50 absolute top-0 left-0 mt-4 ml-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                    <strong className="font-bold">¡Parece que llegas tarde! </strong>
                    <span className="block sm:inline">Ya existe una cuenta registrada con este correo.</span>
                </div>
            )}
            {loginError && (
                    <div className="z-50 absolute top-0 left-0 mt-4 ml-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                        <strong className="font-bold">¡Algo salió mal! </strong>
                        <span className="block sm:inline">Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.</span>
                    </div>
                )}
            <section className="box">
                <div className="innerBox">
                    <article className="forms-wrap">
                        <form ref={formRef} className="sign-in-form" onSubmit={(event) => { loginHandlerSubmit(event); }}>
                            <div className="logo">
                                <Image src={`${WindCodeHD.src}`} alt="WindCode" width={120} height={120} />
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
                                        className={`input-field ${inputActivo.emailLogin || contenidoInput.emailLogin ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="email"
                                        required
                                        onFocus={() => manejarFocus('emailLogin')}
                                        onBlur={() => manejarBlur('emailLogin')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'emailLogin');
                                            loginHandleChange(event);
                                        }}
                                    />
                                    <label>Correo</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength={8}
                                        className={`input-field ${inputActivo.passwordLogin || contenidoInput.passwordLogin ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="password"
                                        required
                                        onFocus={() => manejarFocus('passwordLogin')}
                                        onBlur={() => manejarBlur('passwordLogin')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'passwordLogin');
                                            loginHandleChange(event);
                                        }}
                                    />
                                    <label>Contraseña</label>
                                </div>

                                <input type="submit" value="Iniciar Sesión" className="sign-btn" />

                                <p className="text">¿Olvidaste tu contraseña o tu correo? <a href="#">Obten ayuda</a> </p>

                            </div>
                        </form>

                        <form ref={formRefRegister} className="sign-up-form" onSubmit={(event) => { registerHandleSubmit(event); }}>
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
                                        name="nombre"
                                        required
                                        onFocus={() => manejarFocus('nombre')}
                                        onBlur={() => manejarBlur('nombre')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'nombre');
                                            registerHandleChange(event);
                                        }}
                                    />
                                    <label>Nombre</label>
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        className={`input-field ${inputActivo.apellido || contenidoInput.apellido ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="apellido"
                                        required
                                        onFocus={() => manejarFocus('apellido')}
                                        onBlur={() => manejarBlur('apellido')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'apellido');
                                            registerHandleChange(event);
                                        }}
                                    />
                                    <label>Apellidos</label>
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className={`input-field ${inputActivo.email || contenidoInput.email ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="email"
                                        required
                                        onFocus={() => manejarFocus('email')}
                                        onBlur={() => manejarBlur('email')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'email');
                                            registerHandleChange(event);
                                        }}
                                    />
                                    <label>Correo</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength={8}
                                        className={`input-field ${inputActivo.password || contenidoInput.password ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="password"
                                        required
                                        onFocus={() => manejarFocus('password')}
                                        onBlur={() => manejarBlur('password')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'password');
                                            registerHandleChange(event);

                                            if (formData.confirmPassword !== '' && formData.confirmPassword !== event.target.value) {
                                                setPasswordError(true);
                                            } else {
                                                setPasswordError(false);
                                            }
                                        }}
                                    />
                                    <label>Contraseña</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength={8}
                                        className={`input-field ${inputActivo.confirmPassword || contenidoInput.confirmPassword ? 'active' : ''}`}
                                        autoComplete="off"
                                        name="confirmPassword"
                                        required
                                        onFocus={() => manejarFocus('confirmPassword')}
                                        onBlur={() => manejarBlur('confirmPassword')}
                                        onChange={(event) => {
                                            manejarCambio(event, 'confirmPassword');
                                            registerHandleChange(event);
                                            // Verificar si las contraseñas no coinciden mientras el usuario escribe
                                            if (formData.password !== '' && formData.password !== event.target.value) {
                                                setPasswordError(true);
                                            } else {
                                                setPasswordError(false);
                                            }
                                        }}
                                    />
                                    <label>Confirmar contraseña</label>
                                    {passwordError && (
                                        <div className="error-message">
                                            <span className="font-medium">¡Error!</span> Las contraseñas no coinciden.
                                        </div>
                                    )}
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