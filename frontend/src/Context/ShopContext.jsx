import { createContext, useEffect, useState } from 'react';
import all_product from '../Components/Assets/all_product';
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        console.log("Cart updated:", cartItems);
    }, [cartItems]);

    const addToCart = (itemId) => {
        console.log("addToCart called with:", itemId);
        setCartItems((prev) => {
            const updated = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log("Cart updated:", updated);
            return updated;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;