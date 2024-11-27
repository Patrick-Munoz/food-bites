import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="border-t-black border-t-2 mt-4 p-4 flex flex-col items-center gap-1 text-center md:flex-row md:justify-between md:items-start md:text-left" id="contact">
            <div className="flex flex-col items-center gap-1 md:mt-4">
                <img src="/foodbites_logo.png" alt="logo" className="w-40 h-16 object-contain"/>
                <p className="text-sm">Copyright &copy; 2024 Food Bites</p>
            </div>
            <ul className="md:mt-4">
                <h2 className="text-lg font-bold md:text-xl">Quick Links</h2>
                <li><a href="#home" className="text-sm md:text-base" >Home</a></li>
                <li><a href="#restaurants" className="text-sm md:text-base">Restaurants</a></li>
                <li><a href="#popular-foods" className="text-sm md:text-base">Popular Foods</a></li>
                <li><a href="#contact" className="text-sm md:text-base">Contact Us</a></li>
            </ul>
            <ul className="md:mt-4">
                <h2 className="text-lg font-bold md:text-xl">Support</h2>
                <li className="text-sm md:text-base">munozpatrickpenullar@gmail.com</li>
                <li className="text-sm md:text-base">+63 9760829432</li>
            </ul>
            <ul className="md:mt-4">
                <h2 className="text-lg font-bold md:text-xl">Social Media</h2>
                <li className="text-sm flex items-center justify-center gap-2 md:justify-start md:text-lg">
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook
                </li>
            </ul>
        </footer>
    )
}

export default Footer;