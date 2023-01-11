import React from "react";
import "tw-elements";

import Image from "next/image";
import apple from "../assets/corousel/apple.jpg";
import camera from "../assets/corousel/camera.jpg";
import ps5 from "../assets/corousel/ps5.jpg";
import drone from "../assets/corousel/drone.jpg";

const Corousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className=" block w-full h-[350px] md:h-[700px]">
              <Image src={apple} alt="..."  objectFit="cover" layout="fill"/>
            </div>
            <div className="carousel-caption md:block absolute text-center pb-6 md:pb-12">
              <h5 className="text-5xl md:text-6xl md:pb-2 font-extrabold ">
                Apple
              </h5>
              <p className="md:text-2xl text-lg">
                Stay productive with the Apple products you love.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <div className="block w-full h-[350px] md:h-[700px]">
              <Image src={camera} alt="..." objectFit="cover" layout="fill"/>
            </div>
            <div className="carousel-caption md:block absolute text-center pb-6 md:pb-12">
              <h5 className="text-3xl md:text-6xl md:pb-2 font-extrabold ">
                DSLR, GoPro, Action Camera and accessories
              </h5>
              <p className="md:text-2xl text-lg">
                Compact cameras for vloggers with good microphone quality
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <div className=" block w-full h-[350px] md:h-[700px]">
              <Image src={drone} alt="..."  objectFit="cover" layout="fill"/>
            </div>
            <div className="carousel-caption md:block absolute text-center pb-6 md:pb-12">
              <h5 className="text-3xl md:text-6xl md:pb-2 font-extrabold ">
                DJI Mini 2 - Make Your Moments Fly
              </h5>
              <p className="md:text-2xl text-base">
                Small but mighty, DJI Mini 2 features 4K videos, 4x Zoom, and
                stunning panoramas, allowing you to explore a whole new
                perspective.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <div className=" block w-full h-[350px] md:h-[700px]">
              <Image src={ps5} alt="..." objectFit="cover" layout="fill" />
            </div>
            <div className="carousel-caption md:block absolute text-center pb-6 md:pb-12">
              <h5 className="text-3xl md:text-6xl md:pb-2 font-extrabold ">
                PlayStation5 | Play Has No Limits
              </h5>
              <p className="md:text-2xl text-lg">
                Everything you need to know about the PlayStation®5 console and
                PlayStation®5 Digital Edition
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="hidden md:block">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="hidden md:block">Next</span>
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Corousel;
