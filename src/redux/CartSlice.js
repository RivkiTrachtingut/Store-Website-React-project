
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // עדכון הכמות אם המוצר כבר בעגלה
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }); // הוספת מוצר חדש עם כמות 1
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // הגדלת הכמות
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity -= 1; // הקטנת הכמות
                if (existingItem.quantity <= 0) {
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // הסרת המוצר אם הכמות 0
                }
            }
        },
        clearCart: (state) => {
            state.cartItems = []; // רוקן את העגלה
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;