import { Facebook, Twitter, Instagram } from "lucide-react"

export default function FooterResponsive() {
    return (
        <footer className="bg-white text-black shadow-lg">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#96C061]">About Us</h3>
                    <p className="text-sm">
                    We are passionate about bringing you the finest teas from around the world. Our commitment to quality and sustainability ensures an exceptional tea experience with every cup.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#96C061]">Quick Links</h3>
                    <ul className="space-y-2">
                    <li><a href="/shop" className="text-sm hover:text-[#96C061] transition-colors duration-200">Shop</a></li>
                    <li><a href="/about" className="text-sm hover:text-[#96C061] transition-colors duration-200">About</a></li>
                    <li><a href="/contact" className="text-sm hover:text-[#96C061] transition-colors duration-200">Contact</a></li>
                    <li><a href="/faq" className="text-sm hover:text-[#96C061] transition-colors duration-200">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#96C061]">Connect With Us</h3>
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
                <p className="text-sm">&copy; 2024 Tea Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}