function PurchaseBtn({id, className, buttonName}) {
    return (
        <button className={`text-white px-4 py-2 rounded-sm button ${className}`} id={id}>{buttonName}</button>
    )
}

export default PurchaseBtn;