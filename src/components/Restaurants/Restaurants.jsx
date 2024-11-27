function Restaurants({imageUrl, imageAlt}) {
    return (
        <>
        <li className="rounded-full shadow-sm shadow-gray-400 border border-gray-200 size-16 flex items-center justify-center md:size-24">
            <img src={imageUrl} alt={imageAlt} className="size-4/5 object-cover"/>
        </li>
        </>
    )
}

export default Restaurants;
