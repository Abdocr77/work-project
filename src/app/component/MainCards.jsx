"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CardsSwipper = () => {
  const [CardsData, SetCardsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/data/CardData.json");
        const data = response.data;
        SetCardsData(data);
      } catch (error) {
        console.error(`Error Fetching CardData : ${error}`);
      }
    };
    getData();
  }, []);

  return (
    <section className="Swipper-Cards text-center">
      <div className="title my-6">
        <h1 className="font-bold text-xl text-customheader">What Our Client Says</h1>
        <p className="font-medium text-sm text-customGray">Lorem ipsum dolor sit amet, consectetur elit</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        className="max-w-screen-xl mx-auto px-2"
      >
        {CardsData.map((product, index) => (
          <SwiperSlide key={index}>
            <CardComponent product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardsSwipper;