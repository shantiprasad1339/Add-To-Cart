import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartItems', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  items: loadState()
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.title);
      if (!existingItem) {
        state.items.push({ 
          name: newItem.title, 
          quantity: 1, 
          price: newItem.price, 
          image: newItem.img 
        });
      } else {
        existingItem.quantity += 1;
      }
      saveState(state.items); 
    },
    removeItem(state, action) {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
      saveState(state.items); // Save to localStorage
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      saveState(state.items); // Save to localStorage
    },
    clearCart(state) {
      state.items = [];
      saveState(state.items); // Save to localStorage
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
