import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function FoodCatalog({imageUrl, imageAlt, name, restaurant, price}) {
    return (
        <>
        <li className="rounded-md shadow-sm shadow-gray-400 border border-gray-200 h-full flex flex-col">
            <img src={imageUrl} alt={imageAlt} className="w-full h-32 object-cover rounded-t-md"/>
            <div className="p-2 flex flex-col justify-between flex-1">
                <div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                                key={star}
                                icon={star <= 5.3 ? faStarSolid : faStarRegular}
                                className="text-yellow-400 text-sm"
                            />
                        ))}
                    </div>
                    <h2 className="text-sm font-bold">{name}</h2>
                    <h3 className="text-xs">{restaurant}</h3>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold text-sm">&#8369; {price}</p>
                    <PurchaseBtn buttonName="Order Now" className="w-24 text-xs font-bold"/>
                </div>
            </div>
        </li>
        </>
    )
}

export default FoodCatalog;