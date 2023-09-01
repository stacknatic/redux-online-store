import { useSelector } from "react-redux"
import { useAppDispatch } from "../app/hooks";
import { useEffect } from "react";
import { Product } from "./Product";
import { fetchProducts } from "../features/productsSlice";

const List = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
  return (
    <div>
        <h1>List goes here</h1>
        {products.map((product) => (<Product key={product.id} {...product} />)
        )}
    </div>
  )
}

export default List;
