export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );

        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                )
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1}]
};









//Utility Functions allow us to keep our files clean and organize functions that may need in multiple files in one location