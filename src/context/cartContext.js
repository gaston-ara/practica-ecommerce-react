import { createContext } from "react";

const Cart = []
const contexto = createContext(Cart);

export const { Provider } = contexto;
export default contexto;