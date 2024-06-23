import { formatCurrency } from "../utils/formatCurrency";
import { useLocation } from "react-router-dom";
import { MoonLoader } from 'react-spinners';

import useProductSearch from "../hooks/useProductSearch";
const SearchItem = () => {
    
    const location = useLocation();
    const productName = location.state?.searchTerm || "";
    const { products, isLoading, error } = useProductSearch(productName);
   
  
    if (isLoading) {
        return <div className="flex flex-col items-center justify-center max-h-screen">
            <MoonLoader
        color="#0000FF" // Màu sắc của MoonLoader
        loading={isLoading} // Bật/tắt MoonLoader
        size={50} // Kích thước của MoonLoader (px)
        aria-label="Loading Spinner"
        data-testid="loader"
        className="items-center"
      />
        </div>
      }
    
      if (error) {
        return <div>Có lỗi...</div>;
      }
  return (
    <div className="flex flex-col bg-gray-100 max-h-screen">
      <h1 className="text-black text-start ml-10 mt-3 font-bold">Từ khóa {productName}</h1>
      <div className="grid grid-cols-6 gap-6 p-10 justify-SearchItens-center ">
        {products.data.map((item, index) => (
          <div key={index} className="rounded-md bg-white p-5">
            <img
              src={item.thumpnail_url}
              alt={item.product_name}
              className="w-40 h-40 object-fill "
            />
            <h3 className="mb-2">{item.product_name}</h3>
            <p className="mb-2">{formatCurrency(item.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SearchItem;
