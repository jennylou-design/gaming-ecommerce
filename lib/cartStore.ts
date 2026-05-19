"use client";

import { create } from "zustand";

type CartItem = {
  title: string;
  price: string;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];

  isOpen: boolean;

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;

  increaseQuantity: (title: string) => void;

  decreaseQuantity: (title: string) => void;

  removeItem: (title: string) => void;

  toggleCart: () => void;
};

export const useCartStore = create<CartStore>(
  (set) => ({
    cart: [],

    isOpen: false,

    addToCart: (item) =>
      set((state) => {

        const existingItem = state.cart.find(
          (cartItem) =>
            cartItem.title === item.title
        );

        if (existingItem) {
          return {
            cart: state.cart.map((cartItem) =>
              cartItem.title === item.title
                ? {
                    ...cartItem,
                    quantity:
                      cartItem.quantity + 1,
                  }
                : cartItem
            ),
            isOpen: true,
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...item,
              quantity: 1,
            },
          ],
          isOpen: true,
        };
      }),

    increaseQuantity: (title) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.title === title
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      })),

    decreaseQuantity: (title) =>
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.title === title
              ? {
                  ...item,
                  quantity:
                    item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      })),

    removeItem: (title) =>
      set((state) => ({
        cart: state.cart.filter(
          (item) => item.title !== title
        ),
      })),

    toggleCart: () =>
      set((state) => ({
        isOpen: !state.isOpen,
      })),
  })
);