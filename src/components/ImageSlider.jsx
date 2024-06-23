import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useBanner from "../hooks/useBanner";

const ImageSlider = () => {
  const { banners, isLoading, error } = useBanner();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false, // Đặt thành false để hiển thị ngang
    verticalSwiping: false,
    autoplay:true,
    autoplaySpeed:3000
  };
  if (isLoading) {
    return <div>Đang tải..</div>;
  }
  if (error) {
    return <div>Có lỗi...</div>;
  }
  return (
    <Slider {...settings}>
      {banners.data
        .slice(0, Math.floor(banners.data.length / 2))
        .map((item, index) => (
          <div key={index} className="bg-gray-100">
            <div className="flex  space-x-10 mt-5 mx-20">
              <img
                src={banners.data[index * 2]?.details[0]?.image} // Ảnh thứ nhất từ index * 2
                alt=""
                className="w-3/4 aspect-video h-60 object-fill rounded-lg shadow-md"
              />
              <img
                src={banners.data[index * 2 + 1]?.details[0]?.image} // Ảnh thứ hai từ index * 2 + 1
                alt=""
                className="w-3/4 aspect-video h-60 object-fill border-grey rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default ImageSlider;
