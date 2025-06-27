import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sophia Reyes",
    designation: "Head of Procurement",
    company: "MediPro Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    comment:
      "The quality and precision of the diagnostic tools exceeded our expectations. Their customer service is unmatched and very responsive to our specific requirements.",
  },
  {
    name: "James Patel",
    designation: "Chief Surgeon",
    company: "LifeLine Hospital",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    comment:
      "Exceptional build quality and reliability. These devices have enhanced our procedural efficiency. I highly recommend them to any medical professional.",
  },
  {
    name: "Alicia Nguyen",
    designation: "Director of Operations",
    company: "HealthTech Systems",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
    comment:
      "Fantastic instruments and an even better team. Their dedication to quality and service has helped us serve our clients better than ever before.",
  },
  {
    name: "Carlos Mehta",
    designation: "Biomedical Engineer",
    company: "NeuroCare Labs",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment:
      "The ergonomic design and clinical accuracy stand out. Highly satisfied with the performance and delivery timelines. Great support and delivery.",
  },
  {
    name: "Lena Hoffman",
    designation: "Senior Nurse",
    company: "St. Mary’s Medical",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 4,
    comment:
      "Reliable and easy to handle. We’ve standardized several wards using their diagnostic devices. It’s been a huge upgrade in our daily routines.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="text-yellow-500 text-sm mt-2">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </div>
);

export default function ClientTestimonials() {
  return (
    <div className="bg-white py-20 px-4">
      {/* Section Heading */}

      <div className="flex justify-center items-center gap-4 mx-8 py-16">
        <div className="bg-red-600 w-40 h-[2px]" />
        <h1 className="text-3xl text-gray-900 font-semibold">
          Client Testimonials
        </h1>
        <div className="bg-red-600 w-40 h-[2px]" />
      </div>

      {/* Swiper Container */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          loop
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="w-full">
              <div className="bg-white rounded-xl shadow-md px-6 py-6 h-full border border-gray-200 w-full max-w-sm mx-auto min-h-[370px] flex flex-col justify-between">
                <div>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 mb-3 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t.designation}, {t.company}
                  </p>

                  <StarRating count={t.rating} />

                  <p className="text-gray-700 mt-4 text-sm leading-relaxed min-h-[120px]">
                    {t.comment}{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-10" />

      {/* Custom Pagination CSS */}
      <style>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background-color: #ccc;
          border-radius: 9999px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background-color: #dc2626; /* red-600 */
        }
      `}</style>
    </div>
  );
}
