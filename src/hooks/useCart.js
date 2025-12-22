import { useContext, useMemo, useCallback } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = useCallback(
    (product) => {
      dispatch({ type: "ADD", payload: product });
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (index) => {
      dispatch({ type: "REMOVE", index });
    },
    [dispatch]
  );

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return { cart, addToCart, removeFromCart, total };
};
