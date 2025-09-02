import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FadeCaption({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  // amount: 0.6 = le h1 est considéré "en vue" quand ~60% est visible
  const inView = useInView(ref, { amount: 0.6, margin: '0px', once: false });

  return (
    <motion.h1
      ref={ref}
      className="text-white text-4xl md:text-6xl font-bold text-center p-4"
      initial={false}
      animate={{
        opacity: inView ? 1 : 0.25,
        scale: inView ? 1 : 0.98, // si in view 1 sinon .98
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {text}
    </motion.h1>
  );
}

export default function ImageSlider() {
  const images = [
    { url: '/home/miel.jpg',  text: 'La diversité des saveurs de votre terroir' },
    { url: '/home/ruche.jpg', text: 'La reine, le coeur de la ruche, la mère de toutes les ouvrières' },
    { url: '/home/cuillere.jpg',  text: 'La pureté' },
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
              <FadeCaption text={image.text} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
