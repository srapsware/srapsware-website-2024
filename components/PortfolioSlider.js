// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import delve from "dlv";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

const Portfolios = ({ portfolios }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {portfolios.map((portfolio, i) => {
        const title = delve(portfolio, "attributes.title");
        const excerpt = delve(portfolio, "attributes.excerpt");
        const slug = delve(portfolio, "attributes.slug");
        const cover = delve(portfolio, "attributes.cover.data.attributes.url");
        //console.log(portfolio);

        return (
          <SwiperSlide key={i}>
            <div className="swiper-slide">
              <figure className="rounded mb-7">
                <a href="#">
                  <Image
                    sizes="630vw"
                    priority
                    width={630}
                    height={410}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={`${cover}`}
                    alt={`${title}`}
                  />
                </a>
              </figure>
              <div className="project-details d-flex justify-content-center flex-column">
                <div className="post-header">
                  <h2 className="post-title h3">
                    <a href="#" className="link-dark">
                      {title}
                    </a>
                  </h2>
                  <div className="post-category text-ash">Mobile Design</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Portfolios;
