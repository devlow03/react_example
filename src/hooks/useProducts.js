import { useState, useEffect } from 'react';
import { getProducts } from '../common/api';

function useProduct(perPage = 10) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getProducts(perPage);
                setProducts(prevProducts => [...prevProducts, ...data.data]);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            } 
        };
        fetchData();
    }, [perPage]);

    return { products, isLoading, error };
}

export default useProduct;
