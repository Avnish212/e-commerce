import { createContext, useContext, useReducer } from "react";
import ProductReducer from "./Products.Reducer";


const ProductsContext = createContext();

export const ProductsProvider =({children})=>{

    const initialState ={
        products:[]
    }

    const [state,dispatch] = useReducer(ProductReducer,initialState)

    return(
        <ProductsContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext

