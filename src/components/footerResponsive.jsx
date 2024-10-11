import { Facebook, Twitter, Instagram } from "lucide-react";

export default function FooterResponsive() {
    return (
        <footer className="bg-white text-black shadow-lg">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#96C061]">Sobre nosotros</h3>
                        <p className="text-sm">
                            Nos apasiona ofrecerte los mejores tés de todo el mundo. Nuestro compromiso con la calidad y la sostenibilidad garantiza una experiencia excepcional en cada taza.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#96C061]">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#beneficios" className="text-sm hover:text-[#96C061] transition-colors duration-200">Tés</a></li>
                            <li><a href="#servicios" className="text-sm hover:text-[#96C061] transition-colors duration-200">Servicios</a></li>
                            <li><a href="#faq" className="text-sm hover:text-[#96C061] transition-colors duration-200">Preguntas</a></li>
                            <li><a href="#testimonios" className="text-sm hover:text-[#96C061] transition-colors duration-200">Testimonios</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#96C061]">Conéctate con nosotros</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#96C061] transition-colors duration-200">
                                <Facebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#96C061] transition-colors duration-200">
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#96C061] transition-colors duration-200">
                                <Instagram size={24} />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                    <p className="text-sm">&copy; 2024 KA - Sitiko . Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
