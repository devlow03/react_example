import { useState, useEffect } from 'react';
import {  getSearchProduct } from '../common/api';

function useProductSearch(productName="") {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getSearchProduct(productName);
                
                setProducts(data);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            } 
        };
        fetchData();
    }, [productName]);

   

    return { products, isLoading, error};
}

export default useProductSearch;
