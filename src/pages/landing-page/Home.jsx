import Header from "../../components/Header/Header";
import PurchaseBtn from "../../components/PurchaseBtn/PurchaseBtn";
import Restaurants from "../../components/Restaurants/Restaurants";
import FoodCatalog from "../../components/FoodCatalog/FoodCatalog";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <Header />
            <main className="flex flex-row items-center md:justify-between">
                <section className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold md:text-3xl xl:text-7xl">Your Favorite <span className="text-primary-color md:text-3xl xl:text-7xl">Food Cravings</span> Partner</h1>
                    <p className="text-xs md:text-lg xl:text-2xl">Something hot, Something tasty, delivered quickly at your doorstep</p>
                    <PurchaseBtn id="order-now-btn" buttonName="Order Now" className={"w-fit text-xs font-bold xl:text-lg"}/>
                </section>
                <img 
                    src="/rider.png" 
                    alt="rider" 
                    className="max-w-[176px] max-h-[176px] md:max-w-[288px] md:max-h-[288px] xl:max-w-[768px] xl:max-h-[768px]"
                />
            </main>
            <section className="mt-4" id="restaurants-list">
                <h1 className="text-lg font-bold text-center md:text-2xl xl:text-4xl">Restaurants</h1>
                <p className="text-xs text-center md:text-lg xl:text-xl">Take a look at some of our partnered restaurants</p>
                <ul className="grid grid-cols-4 mt-4 gap-4 md:justify-items-center xl:grid-cols-8">
                    <Restaurants imageUrl="/mcdo_logo.png" imageAlt="Mcdo"/>
                    <Restaurants imageUrl="/jollibee_logo.png" imageAlt="Jollibee"/>
                    <Restaurants imageUrl="/kfc_logo.png" imageAlt="KFC"/>
                    <Restaurants imageUrl="/burger_king_logo.png" imageAlt="Burger King"/>
                    <Restaurants imageUrl="/pizza_hut_logo.png" imageAlt="Pizza Hut"/>
                    <Restaurants imageUrl="/wendys_logo.png" imageAlt="Wendys"/>
                    <Restaurants imageUrl="/dairy_queen_logo.png" imageAlt="Dairy Queen"/>
                    <Restaurants imageUrl="/startbucks_logo.png" imageAlt="Startbucks"/>
                </ul>
            </section>
            <section className="mt-4" id="popular-foods">
                <h1 className="text-lg font-bold text-center md:text-2xl xl:text-4xl">Popular Foods</h1>
                <p className="text-xs text-center md:text-lg xl:text-xl">Take a look at some of the popular foods from different restaurants</p>
                <ul className="grid grid-cols-2 mt-4 gap-4 md:grid-cols-4">
                    <FoodCatalog imageUrl="/burger_king_food.jpg" imageAlt="Whopper" name="Deluxe Burger" restaurant="Burger King" price="250"/>
                    <FoodCatalog imageUrl="/jollibee_food.jpg" imageAlt="2pc Chickenjoy" name="2pc Chickenjoy Solo" restaurant="Jollibee" price="150"/>
                    <FoodCatalog imageUrl="/mcdo_food.jpg" imageAlt="6pcs McNuggets" name="6pcs McNuggets" restaurant="McDonalds" price="100"/>
                    <FoodCatalog imageUrl="/kfc_food.jpg" imageAlt="4pcs Kfc Chikenjoy" name="4pcs Kfc Chikenjoy" restaurant="KFC" price="400"/>
                    <FoodCatalog imageUrl="/pizza_hut_food.jpg" imageAlt="Pepperoni Pizza" name="Pepperoni Pizza" restaurant="Pizza Hut" price="340"/>
                    <FoodCatalog imageUrl="/wendys_food.jpg" imageAlt="Dave Single Cheeseburger" name="Dave Single Cheeseburger" restaurant="Wendys" price="130"/>
                    <FoodCatalog imageUrl="/dairy_queen_food.jpg" imageAlt="Chocolate Chip Ice Cream" name="Chocolate Chip Ice Cream" restaurant="Dairy Queen" price="50"/>
                    <FoodCatalog imageUrl="/starbucks_food.jpg" imageAlt="Caramel Cake" name="Caramel Cake" restaurant="Startbucks" price="120"/>
                </ul>
            </section>
            <Footer />
        </>
    )
}

export default Home;