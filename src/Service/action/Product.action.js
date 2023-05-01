import { GET_PRODUCTS } from "../constant/action.Tupes"
import { api } from '../../Api/index';

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}

export const getProductsAsync = () => {

    return async dispatch => {
        const res = await api.get("/products")
        dispatch(getProducts(res.data))
    }
}