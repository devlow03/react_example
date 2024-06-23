import { useState, useEffect } from "react";
import useProduct from "../hooks/useProducts";
import ButtonLoadMore from "./ButtonLoadMore";
import { formatCurrency } from "../utils/formatCurrency";
import { MoonLoader } from "react-spinners";
const Item = () => {
  const [perPage, setPerPage] = useState(10);
  const [allProducts, setAllProducts] = useState([]);

  const { products, isLoading, error } = useProduct(perPage);
  useEffect(() => {
    if (products && products.length > 0) {
      // Nối dữ liệu mới vào mảng sản phẩm hiện tại
      setAllProducts((prevProducts) => [...prevProducts, ...products]);
    }
  }, [products]);
  const handleLoadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 10);
  };

  if (isLoading && allProducts.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center max-h-screen">
        <MoonLoader
          color="#0000FF" // Màu sắc của MoonLoader
          loading={isLoading} // Bật/tắt MoonLoader
          size={50} // Kích thước của MoonLoader (px)
          aria-label="Loading Spinner"
          data-testid="loader"
          className="items-center"
        />
      </div>
    );
  }

  if (error) {
    return <div>Có lỗi...</div>;
  }

  console.log(products);

  return (
    <div className="flex flex-col items-center ">
      <div className="grid grid-cols-6 gap-6 mx-20 mt-10 justify-items-center ">
        {products.map((item, index) => (
          <div key={index} className="rounded-md bg-white p-5 transform transition duration-300 hover:scale-110">
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
      <ButtonLoadMore className="mt-4 mb-5" onClick={handleLoadMore}>
        Load more
      </ButtonLoadMore>
    </div>
  );
};

export default Item;
