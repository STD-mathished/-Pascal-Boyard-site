import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const images = [
    { url: '/home/miel.jpg',  text: 'La diversité des saveurs de votre terroir' },
    { url: '/home/ruche.jpg', text: 'La reine, le coeur de la ruche, la mère de toutes les ouvrières' },
    { url: '/home/miel.jpg',  text: 'La pureté' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[60vh]">
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center p-4">
                {image.text}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
