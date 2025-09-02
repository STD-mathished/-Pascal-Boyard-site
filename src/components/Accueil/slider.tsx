import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import miel from '/home/miel.jpg';
import ruche from '/home/ruche.jpg';


export default function ImageSlider() {
  const images = [
    { url: miel, text: 'La diversité des saveurs de votre terroir' },
    { url: ruche, text: 'La reine, le coeur de la ruche, la mère de toutes les ouvrières' },
    { url: miel, text: 'La pureté' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-screen">
            <img 
              src={image.url} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
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