'use client'
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FlyoutLink } from "@/components/FlyoutLink";
import logoWindCode from "@/public/WindCodeHD.png";
import Image from "next/image";
export default function Porter() {

    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <div className="overflow-hidden">
            <div className=" min-h-[5.5em]">
                <HeaderMainPage />
                <div className="absolute inset-y-0 left-0 p-2 ml-6">
            <Image src={logoWindCode.src} alt="Logo" quality={100} width={120} height={120} className="opacity-80 ml-4" />
        </div>
            </div>
            <div className="min-h-16">
                <motion.header className="bg-black w-full h-16 fixed z-10"
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: "-150%" }
                    }}
                    animate={hidden ? "hidden" : "visible"}>
                    <div className="flex justify-between items-center h-full px-4">
                        <div className="flex items-center">
                            <h1 className="text-white text-2xl">WindCodeBlogs</h1>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex">
                                <li className="text-white mx-2"><FlyoutLink href="/blog#sociologico" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Rivalidad entre competidores</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#etnografico" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">¿Qué es un estudio etnográfico?</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#axiologicos" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">¿Qué es un estudio axiológicos?</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/porter" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">5 fuerzas de Michael Porter</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#conclusiones" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Conclusiones</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#bibliografia" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Bibliografia</FlyoutLink></li>
                            </ul>
                        </div>
                    </div>
                </motion.header>
            </div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
                    <h1 className="text-4xl font-bold text-center mb-10 text-[#8D94C4]">Las 5 Fuerzas de Porter Aplicadas a Windcode</h1>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Intensidad de la competencia actual</h2>
                        <p className="text-lg mb-2"><strong>Descripción:</strong> Esta fuerza mide el grado de rivalidad entre las empresas existentes en la industria. Factores como el número de competidores, la tasa de crecimiento de la industria, la diferenciación de productos y las barreras de salida influyen en la intensidad de la competencia.</p>
                        <p className="text-lg"><strong>Aplicación a Windcode:</strong> En un mercado saturado, Windcode debe destacarse mediante la innovación constante y la oferta de soluciones únicas. Esto podría incluir el desarrollo de software personalizado que resuelva problemas específicos de los clientes, así como la adopción de tecnologías emergentes para mantenerse a la vanguardia.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Amenaza de nuevos entrantes</h2>
                        <p className="text-lg mb-2"><strong>Descripción:</strong> Esta fuerza evalúa la facilidad con la que nuevas empresas pueden ingresar al mercado. Las barreras de entrada, como las economías de escala, la diferenciación de productos, el acceso a canales de distribución y las regulaciones gubernamentales, juegan un papel crucial.</p>
                        <p className="text-lg"><strong>Aplicación a Windcode:</strong> Para protegerse contra nuevos competidores, Windcode debería construir una sólida reputación y establecer relaciones duraderas con los clientes. Además, invertir en investigación y desarrollo (I+D) puede crear barreras tecnológicas que dificulten la entrada de nuevos jugadores.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Productos sustitutos</h2>
                        <p className="text-lg mb-2"><strong>Descripción:</strong> Los productos sustitutos son aquellos que pueden satisfacer las mismas necesidades que los productos de la industria, aunque no sean idénticos. La amenaza de sustitutos depende de su capacidad para cumplir con las necesidades de los clientes y su precio relativo.</p>
                        <p className="text-lg"><strong>Aplicación a Windcode:</strong> Windcode debe mantenerse al tanto de las tendencias del mercado para anticipar posibles sustitutos. Ofrecer servicios personalizados y de alta calidad que no puedan ser fácilmente reemplazados por soluciones genéricas es crucial. Esto incluye entender las necesidades cambiantes de los clientes y adaptarse rápidamente.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Poder de negociación de los proveedores</h2>
                        <p className="text-lg mb-2"><strong>Descripción:</strong> Esta fuerza mide el grado de influencia que los proveedores pueden tener sobre una industria, incluyendo su capacidad para aumentar los precios o reducir la calidad de los productos o servicios.</p>
                        <p className="text-lg"><strong>Aplicación a Windcode:</strong> Para mitigar el poder de los proveedores, Windcode debería mantener relaciones estratégicas con múltiples proveedores. Esto no solo ayuda a evitar dependencias, sino que también permite negociar mejores precios y condiciones. La diversificación de la base de proveedores es clave para asegurar la estabilidad y flexibilidad en las operaciones.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Poder de negociación de los clientes</h2>
                        <p className="text-lg mb-2"><strong>Descripción:</strong> Esta fuerza analiza la influencia que los clientes pueden ejercer sobre la industria. Los clientes con un fuerte poder de negociación pueden exigir precios más bajos, mayor calidad o mejores servicios.</p>
                        <p className="text-lg"><strong>Aplicación a Windcode:</strong> Windcode debe enfocarse en ofrecer el mejor valor posible a sus clientes. Esto incluye superar sus expectativas y fomentar su lealtad a través de un servicio al cliente excepcional y productos de alta calidad. La personalización y la adaptación a las necesidades específicas de los clientes pueden reducir su poder de negociación.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
