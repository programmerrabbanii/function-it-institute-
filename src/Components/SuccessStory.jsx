import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import success1 from "../assets/Function IT Student Success Stories (1).jpg";
import success2 from "../assets/Function IT Student Success Stories (2).jpg";
import success3 from "../assets/Function IT Student Success Stories (3).jpg";
import success4 from "../assets/Function IT Student Success Stories (4).jpg";

const successImages = [success1, success2, success3, success4];

const SuccessStory = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-4 md:px-10">
      {/* ✅ Heading Added */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Student Success Stories</h2>
        <p className="text-gray-300">Our talented students who achieved their dreams</p>
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        effect="coverflow"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // ✅ Flickering fix
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {successImages.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={img}
              alt={`Success ${index + 1}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStory;
