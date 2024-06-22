import  { useState,useEffect } from 'react';
import useProduct from '../hooks/useProducts';
import ButtonLoadMore from "./ButtonLoadMore";

const Item = () => {
    const [perPage, setPerPage] = useState(10);
    const [allProducts, setAllProducts] = useState([]);

    const { products, isLoading, error } = useProduct(perPage);
    useEffect(() => {
        if (products && products.length > 0) {
            // Nối dữ liệu mới vào mảng sản phẩm hiện tại
            setAllProducts(prevProducts => [...prevProducts, ...products]);
        }
    }, [products]);
    const handleLoadMore = () => {
        
        setPerPage(prevPerPage => prevPerPage + 10);
    };

    if (isLoading && allProducts.length == 0) {
    
        return <div>Đang tải.....</div>;
    }

    if (error) {
        return <div>Có lỗi...</div>;
    }

    console.log(products);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-4 gap-4 p-20 justify-items-center bg-gray-100">
                {products.map((item, index) => (
                    <div key={index} className="rounded-md bg-white p-5">
                        <img src={item.thumpnail_url} alt={item.product_name} className="w-50 h-52 object-cover mb-4" />
                        <h3 className="mb-2">{item.product_name}</h3>
                        <p className="mb-2">{item.price}</p>
                    </div>
                ))}
            </div>
            <ButtonLoadMore className="mt-4" onClick={handleLoadMore}>Load more</ButtonLoadMore>
        </div>
    );
}

export default Item;
