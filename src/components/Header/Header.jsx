import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";
import toggleNav from "./headerFunctions";

function Header() {
    return (
        <>
        <header className="flex justify-between items-center md:justify-evenly">
            <a href="/" aria-label="Food Bites Home">
                <img src={"/foodbites_logo.png"} alt="Food Bites logo" className="max-w-32 md:max-w-44 xl:max-w-64"/>
            </a>
            <button 
                className="text-3xl md:hidden" 
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
                aria-expanded="false"
            >
                &#9776;
            </button>
            <aside 
                className="backdrop hidden fixed inset-0 bg-black bg-opacity-50 z-20" 
                onClick={toggleNav}
                role="presentation"
            ></aside>
            <nav 
                className="hidden flex flex-col items-end absolute right-0 top-0 h-full bg-white min-w-44 max-w-full z-30 md:flex md:bg-transparent md:flex-row md:justify-between md:items-center md:relative md:w-full"
                aria-label="Main navigation"
            >
                <ul className="flex flex-row gap-4 flex-col p-2 m-2 text-end relative w-full md:flex-row md:justify-between md:items-center md:-m-0 md:max-w-fit">
                    <button 
                        className="absolute left-5 top-0 text-2xl md:hidden" 
                        onClick={toggleNav}
                        aria-label="Close navigation menu"
                    >
                        &#10005;
                    </button>
                    <li><a href="#restaurants-list" className="md:text-lg xl:text-xl">Restaurants</a></li>
                    <li><a href="#popular-foods" className="md:text-lg xl:text-xl">Popular Foods</a></li>
                    <li><a href="#contact" className="md:text-lg xl:text-xl">Contact Us</a></li>
                </ul>
                <PurchaseBtn id="order-now-btn" buttonName="Order Now" className={"m-2 font-bold md-text-xs md:-m-0 md:m-0 xl:text-lg"}/>
            </nav>
        </header>
        </>
    )
}

export default Header;
